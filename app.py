from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

names = {
    "tim": {
        "age": 19,
        "gender": "male"
    },
    "ronny": {
        "age": 21,
        "gender": "female"
    }
}

class HelloWorld(Resource):

    def get(self, name, age):

        return names[name]


api.add_resource(HelloWorld, "/hello/<string:name>/<int:age>")

if __name__ == "__main__":
    app.run(debug = True)