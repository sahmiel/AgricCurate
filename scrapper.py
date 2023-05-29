from flask import Flask, render_template, request
from googlesearch import search

app = Flask(__name__)

@app.route('/scrape', methods=['POST'])
def scrape():
    query = request.form.get('query')
    num_results = int(request.form.get('num_results'))

    results = []

    for url in search(query, num_results=num_results):
        results.append(url)

    return render_template('results.html', results=results)

if __name__ == '__main__':
    app.run()
