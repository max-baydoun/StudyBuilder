from flask import jsonify

class BackendError():
    def __init__(self, type, message, code=500):
        self.code = code
        self.type = type
        self.message = message
        self.response = {'type': self.type, 'error': self.message}
    
    def to_dict(self):
        return jsonify(self.response), self.code

class InputError(BackendError):
    def __init__(self, message):
        super().__init__(self.__class__.__name__, message, 400)

class NotImplemented(BackendError):
    def __init__(self, message):
        super().__init__(self.__class__.__name__, message, 501)