


async function getPrediction() {
    const avgTemp = document.getElementById('avgTemp').value;
    const maxTemp = document.getElementById('maxTemp').value;
    const minTemp = document.getElementById('minTemp').value;
    const windSpeed = document.getElementById('windSpeed').value;
    const precipitation = document.getElementById('precipitation').value;
    const windDir = document.getElementById('windDir').value;
    const snowDepth = document.getElementById('snowDepth').value;
    const sunshine = document.getElementById('sunshine').value;
    const windGust = document.getElementById('windGust').value;
    const seaLevelPressure = document.getElementById('seaLevelPressure').value;

    const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avg_temp_c: avgTemp,
            max_temp_c: maxTemp,
            min_temp_c: minTemp,
            avg_wind_speed_kmh: windSpeed,
            precipitation_mm: precipitation,
            avg_wind_dir_deg: windDir,
            snow_depth_mm: snowDepth,
            sunshine_total_min: sunshine,
            peak_wind_gust_kmh: windGust,
            avg_sea_level_pres_hpa: seaLevelPressure
        })
    });

    const result = await response.json();
    const prediction = result.prediction === 1 ? 'Heat Wave Alert!' : 'No Heat Wave.';
    document.getElementById('result').innerText = prediction;
}