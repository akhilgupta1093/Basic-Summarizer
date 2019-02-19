# server.py
from gensim.summarization.summarizer import summarize
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/summarizer", methods = ['POST'])
def summary():
	global content
	print(request.is_json)
	content = request.get_json()
	print(content)
	content = content['text']
	print(content)
	return content

@app.route("/sendback", methods = ['GET'])
def sendback():
	x = summarize(content)
	return x

if __name__ == "__main__":
	app.run( port = 4960 )










