from flask import Flask
from flask import render_template, jsonify
import OpenOPC
import time
import sqlite3


app = Flask(__name__)
OPC_SERVER = 'Matrikon.OPC.Simulation.1'
#TAG = 'Random.fic101'

opc = OpenOPC.client() 

@app.route('/')
def index():
    # Renderizamos el template index.html con el valor del tag como contexto
    return render_template('index.html')

@app.route('/tag_value')
def tag_value():
	opc.connect(OPC_SERVER)  # Nombre del servidor OPC 	
	tag_list = []
	for i in range(1, 27):
		tag = 'Random.fic'+str(100 + i)
		value = opc.read(tag)[0]
		tagi = 'tag'+str(0 + i)
		tag_list.append((tagi, value))
	
	return jsonify(dict(tag_list))
				
if __name__ == '__main__':
    app.run(host='10.60.121.38',debug=True, port=5000)
	#app.run(host='192.168.100.38',debug=True, port=5000)
	#app.run(debug=True, port=5000)


