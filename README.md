## Vue que fichier prometheus.ml 

### my global config
global:
  scrape_interval: 15s 
  evaluation_interval: 15s 

### Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

### Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  // - "first_rules.yml"
  //- "second_rules.yml"
scrape_configs:
  - job_name: "prometheus"

    //metrics_path defaults to '/metrics'
    //scheme defaults to 'http'.

    static_configs:
      - targets: ["localhost:9090"]

  - job_name: 'nodejs'
    static_configs:
      - targets: ['localhost:3000'] # Replace with your Node.js app's address


