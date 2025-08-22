from flask import Flask, request, render_template

app = Flask(__name__) #object is created

@app.route("/")    #domain address
def hello_world():
 return render_template("index.html")

@app.route("/predict", methods=["POST", "GET"])
def predict():
    weight = request.form["1"]
    height = request.form["2"]

    weight = float(weight)
    height = float(height)

    height = height / 100  # converting cm into metres

    BMI = weight / (height * height)   #  Calculate BMI first
    BMI = round(BMI, 2)                #  Then round it

    if BMI > 0:
        if BMI <= 16:
            return render_template("result.html", pred=f"Your BMI is {BMI}. You are severely underweight.")
        elif BMI <= 18.5:
            return render_template("result.html", pred=f"Your BMI is {BMI}. You are underweight.")
        elif BMI <= 25:
            return render_template("result.html", pred=f"Your BMI is {BMI}. You are healthy.")
        elif BMI <= 30:
            return render_template("result.html", pred=f"Your BMI is {BMI}. You are overweight.")
        else:
            return render_template("result.html", pred=f"Your BMI is {BMI}. You are severely overweight.")
    else:
        return render_template("result.html", pred="Enter correct details of weight and height.")

if __name__=="__main__":
 app.run(debug=True)