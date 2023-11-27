# from flask_restful import Api, Resource, reqparse
# import json
# import numpy as np
# import requests

# # response = requests.get('http://localhost:3000')
# # global configArr
# # configArr = response.json()
# class HelloApiHandler(Resource):
  
#   def get(self):
#     return {
#           'resultStatus': 'SUCCESS',
#           'message': str(myTArra)

#           }
#   def post(self):
#       # print(self)
#     parser = reqparse.RequestParser()
#     parser.add_argument('type', type=str)
#     parser.add_argument('message', type=str)

#     args = parser.parse_args()

#       # print(args)
#       # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

#     request_type = args['type']
#     request_json = args['message']
#     # ret_status, ret_msg = ReturnData(request_type, request_json)
#     # currently just returning the req straight
#     ret_status = request_type
    
#     ret_msg = request_json
#     print(ret_msg)
#     if ret_msg:
#       message = "Your Message Requested: {}".format(ret_msg)
#     else:
#       message = "No Msg"
      
#     final_ret = {"status": "Success", "message": message}

#     return ret_msg
# class HopfieldNetwork:
#   def __init__(self, num_neurons):
#                 self.num_neurons = num_neurons
#                 self.weights = np.zeros((num_neurons, num_neurons))

#   def train(self, training_data):
#                 for data in training_data:
#                     # Flatten the 10x10 matrix into a 1D array
#                     data = data.flatten()
#                     self.weights += np.outer(data, data)
#                 np.fill_diagonal(self.weights, 0)

#   def recall(self, data, iterations=10):
#               global myTArr
#               # Flatten the 10x10 matrix into a 1D array
#               data = data.flatten()
#               prev_data = np.copy(data)
#               for _ in range(iterations):
#                   for i in range(self.num_neurons):
#                       raw_output = np.dot(self.weights[i], data)
#                       if raw_output > 0:
#                           data[i] = 1
#                       else:
#                           data[i] = -1
#                       # If data has changed in this step, make a plot
#                       if data[i] != prev_data[i]:
#                           # plt.imshow(data.reshape((10,10)), cmap='gray')
#                           # plt.show()
#                           global myTArra
#                           myTArra=str(data).replace('[','').replace(']','').replace('  ',' ').replace('\n','')
#                           # print(myTArra)
#                       prev_data[i] = data[i]
#               # Reshape the 1D array back into a 10x10 matrix
#               return myTArra

from flask_restful import Resource, reqparse
import numpy as np
import ast
class HopfieldNetwork:
    def __init__(self, num_neurons):
        self.num_neurons = num_neurons
        self.weights = np.zeros((num_neurons, num_neurons))

    def train(self, training_data):
        for data in training_data:
            data = data.flatten()
            self.weights += np.outer(data, data)
        np.fill_diagonal(self.weights, 0)

    def recall(self, data, iterations=10):
        data = data.flatten()
        prev_data = np.copy(data)
        for _ in range(iterations):
            for i in range(self.num_neurons):
                raw_output = np.dot(self.weights[i], data)
                if raw_output > 0:
                    data[i] = 1
                else:
                    data[i] = -1
                prev_data[i] = data[i]
        return data.reshape((10,10))
pattern1 = np.array([[1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1],
                              [1,1,1,1,-1,-1,1,1,1,1]])

pattern2 = np.array([[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                              [-1,-1,1,1,1,1,1,1,1,1],
                              [-1,-1,1,1,1,1,1,1,1,1],
                              [-1,-1,1,1,1,1,1,1,1,1],
                              [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]])

pattern3 = np.array([[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [1,1,-1,-1,-1,-1,-1,-1,-1,-1],
                              [1,1,-1,-1,-1,-1,-1,-1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [1,1,1,1,1,1,1,1,-1,-1],
                              [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]])

pattern4 = np.array([[-1,-1,1,1,1,-1,-1,1,1,1],
                              [-1,-1,1,1,1,-1,-1,1,1,1],
                              [-1,-1,1,1,1,-1,-1,1,1,1],
                              [-1,-1,1,1,1,-1,-1,1,1,1],
                              [-1,-1,1,1,1,-1,-1,1,1,1],
                              [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
                              [1,1,1,1,1,-1,-1,1,1,1],
                              [1,1,1,1,1,-1,-1,1,1,1],
                              [1,1,1,1,1,-1,-1,1,1,1],
                              [1,1,1,1,1,-1,-1,1,1,1]])
patterns = np.array([pattern1, pattern2, pattern3,pattern4])
class HelloApiHandler(Resource):
        
    def get(self):
        return {
      'resultStatus': 'SUCCESS',
      'message': str(recalled_pattern)
      }
    def post(self):
      parser = reqparse.RequestParser()
      parser.add_argument('type', type=str)
      parser.add_argument('message', type=str)
      args = parser.parse_args()
      request_type = args['type']
      request_json = args['message']
      ret_status = request_type
      ret_msg = request_json
      network = HopfieldNetwork(100)
      network.train(patterns)
      test_pattern=np.array(ast.literal_eval(ret_msg))
      # recalled_pattern = network.recall(test_pattern)
      recalled_pattern = network.recall(test_pattern)
      print(recalled_pattern)
      
      if ret_msg:
        message = "Your Message Requested: {}".format(ret_msg)
      else:
        message = "No Msg"
      final_ret = {"status": "Success", "message": str(recalled_pattern).replace('[','').replace(']','').replace('  ',' ').replace('\n','')}
      return final_ret
  







  