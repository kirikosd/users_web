<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org" layout:decorate="/layouts/base-layout"
      xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
    <title>Home Page</title>
    <script>
        firebase.auth().onAuthStateChanged(user => {
          if (!user) {
            window.location.href = "/login";
          }
        });
    </script>
</head>
<body>
<section layout:fragment="content">
    <div class="container mt-5">
        <div class="text-center mb-4">
            <h1 class="display-4">Welcome to MyInventory WebPage</h1>
            <p class="lead">Keep track of your inventory. Analyze reports. Submit orders.</p>
            <p class="lead">All in one place</p>
        </div>

        <div class="row g-4">
            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <h5 class="card-title">📈 Analytics at a Glance</h5>
                        <p class="card-text">Generate daily reports with product sales, earnings, and trends.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <h5 class="card-title">🧾 Real-Time Updates</h5>
                        <p class="card-text">Process transactions and update your data in real time.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <h5 class="card-title">📦 Product Insights</h5>
                        <p class="card-text">Track top sellers, low stock alerts, and performance history across days.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
</html>
