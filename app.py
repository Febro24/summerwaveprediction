from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load your trained model
model = joblib.load('summer_heat_alert_model.pkl')  
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = [
        data['avg_temp_c'], 
        data['max_temp_c'], 
        data['min_temp_c'], 
        data['avg_wind_speed_kmh'], 
        data['precipitation_mm'], 
        data['avg_wind_dir_deg'], 
        data['snow_depth_mm'], 
        data['sunshine_total_min'], 
        data['peak_wind_gust_kmh'], 
        data['avg_sea_level_pres_hpa']
    ]
    
    # Make a prediction
    prediction = model.predict([features])
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)