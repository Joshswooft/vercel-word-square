from sanic import Sanic
from sanic.response import json
from sanic_validation import validate_json

from api.validation.schema import word_schema
from api.src.word_square import generate_word_square

app = Sanic()

@app.route('/')
@app.route('/<path:path>')
@validate_json(word_schema, clean=True)
async def index(request, valid_json, path=""):
    size = valid_json["size"]
    word = valid_json["word"]
    try:
        res = generate_word_square(size, word)
        return json({"data": res, "errors": ""}, status=200)
    except:
        raise ServerError("Opps server error", status_code=500)
