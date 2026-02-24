from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Simulação de "banco de dados" simples (apenas para teste)
usuarios = {}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/registrar", methods=["POST"])
def registrar():
    username = request.form.get("username")
    password = request.form.get("password")

    if username in usuarios:
        return "Usuário já existe!"

    usuarios[username] = password
    return redirect(url_for("home"))


@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    if username in usuarios and usuarios[username] == password:
        return f"Bem-vindo, {username}!"

    return "Usuário ou senha incorretos!"


if __name__ == "__main__":
    app.run(debug=True)