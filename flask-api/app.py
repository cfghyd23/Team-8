from flask import Flask, request, jsonify
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route("/")
def index():
    return "Hello"

@app.route("/mail", methods=["POST"])
def send_email():
    if request.method == "POST":
        sender_email = "marpucfg@gmail.com"
        password = ""
        recipient_email = request.form.get("email")
        subject = request.form.get("subject")
        body = request.form.get("body")

        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = recipient_email
        message["Subject"] = subject

        message.attach(MIMEText(body, "plain"))

        try:
            with smtplib.SMTP("smtp.gmail.com", 587) as server:
                server.starttls()
                server.login(sender_email, password)
                server.sendmail(sender_email, recipient_email, message.as_string())

            return jsonify({"status": "success", "message": "Email sent successfully!"})
        except smtplib.SMTPException as e:
            error_message = str(e)
            return jsonify({"status": "error", "message": error_message})
    else:
        return jsonify({"status": "error", "message": "Invalid request"})

if __name__ == "__main__":
    app.run()
