minikube start // kubectl is now configured to use "minikube" cluster and "default" namespace by default
kubectl cluster-info // Kubernetes control plane is running at https://127.0.0.1:52120
kubectl get nodes // to see my nodes . if ready then ok
minikube docker-env // Use Minikube Docker
kubectl get pods // see the pods running

Deployment Order
kubectl apply -f .\k8s\mysql-secret.yaml
kubectl apply -f .\k8s\mysql-configmap.yaml
kubectl apply -f .\k8s\mysql-deployment.yaml
kubectl apply -f .\k8s\mysql-service.yaml
kubectl apply -f .\k8s\node-deployment.yaml
kubectl apply -f .\k8s\node-service.yaml

minikube service node-app // Access app
minikube dashboard // K8s dashboard access
