from flask import Flask, jsonify, request
import requests
from flask_cors import CORS
import configparser

app = Flask(__name__)
CORS(app)

BASE_URL = "https://devapi.qweather.com/v7"
config = configparser.ConfigParser()
config.read('config.ini')
API_KEY = config['QWEATHER']['API_KEY']

@app.route('/weather/now', methods=['GET'])
def get_now_weather():
    location = request.args.get('location')
    # 构建完整的请求URL
    url = f"{BASE_URL}/weather/now?location={location}&key={API_KEY}"

    # 发起GET请求
    response = requests.get(url)
    
    # 检查请求是否成功
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to retrieve data"}), 400

if __name__ == '__main__':
    app.run(debug=True)
