from flask import Flask
from flask_restful import Resource, Api, reqparse, abort

app = Flask(__name__)
api = Api(app)

video_put_args = reqparse.RequestParser()
video_put_args.add_argument("title", type = str, help = "Name of the video")
video_put_args.add_argument("likes", type = int, help = "Likes of the video")
video_put_args.add_argument("views", type = int, help = "Views of the video")

videos = {}

def check_if_video_exist(video_id):

    if video_id in videos:
        abort(409, message = "Video with specified id already exist")

def check_video_does_not_exist(video_id):

    if video_id not in videos:
        abort(404, message = "Video with specified id does not exist")

class Video(Resource):

    def get(self, video_id):

        check_video_does_not_exist(video_id)

        return videos[video_id]
    
    def put(self, video_id):

        check_if_video_exist(video_id)
        args = video_put_args.parse_args()
        videos[video_id] = args

        return {video_id: args}

    def delete(self, video_id):

        check_video_does_not_exist(video_id)
        del videos[video_id]

        return {'data': 'Video has been deleted successfully'}

api.add_resource(Video, "/video/<int:video_id>")

if __name__ == "__main__":
    app.run(debug = True)