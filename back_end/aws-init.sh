#!/bin/bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install
aws configure set aws_access_key_id K5FBHAHF4A8811CV1URL
aws configure set aws_secret_access_key 9XseyYKCYCzVmYrrn1JDAuDItoOtHMI4ITl5O2N3
aws configure set default.region us-east-1
