from flask import Flask, request, jsonify
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import requests


app = Flask(__name__)

@app.route("/")
def index():
    return "HomePage"

@app.route("/mail", methods=["POST"])
def send_email():

    url = 'http://localhost:5000/api/cause/getAllCauses'  # Replace with the actual URL of your Node.js server endpoint

    try:
        response = requests.get(url)
        response.raise_for_status()
        users = response.json()

    except requests.exceptions.RequestException as e:
        print('Error:', e)

    if request.method == "POST":

        data = request.get_json()

        desired_id = data.get("id")  # ID to search for

        filtered_data = [item for item in users if item['_id'] == desired_id]

        item = filtered_data[0]  # Assuming there is only one item in the list
        target = int(item['target'])
        days = int(item['days'])
        collected = int(item['collected'])
        recipient_email = str(item['user']['email'])

        sender_email = "marpucfg@gmail.com"
        password = ""

        if(collected < (target*days)/10):
            subject = "Work harder"
            body = "You have collected less than the target. Please try harder."
        else:
            subject = "Good job"
            body = "You have collected more than the target. You are entitled to Perk 1. Keep going."

        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = recipient_email
        message["Subject"] = subject

        message.attach(MIMEText(body, "plain"))

        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, password)
            server.sendmail(sender_email, recipient_email, message.as_string())

    return jsonify(response=None)


if __name__ == "__main__":
    app.run()
