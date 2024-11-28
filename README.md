
## [Dockerfile](https://github.com/Gourav-91/nodejs-demo/blob/main/Dockerfile) -use

**To build an docker image using this Dockerfile , Run -** 
```docker build -t gcr.io/project-id/nodejs-demo:v1 .```
 **To push this image to google container registry, Run-** 
```docker push gcr.io/project-id/nodejs-demo:v1```

### docker scout cves
**The ```docker scout cves``` command analyzes a software artifact for vulnerabilities.**
```
    docker scout cves gcr.io/project-id/nodejs-demo:v1
```

## GKE cluster , Namespaces & Network Policies:
```
  gcloud container clusters create nodejs-demo --num-nodes=2 --region=uscentral1-a
```
``` 
  kubectl create namespace dev
  kubectl create namespace prod
```

 **To restrict cross-namespace access in prod**
 ```
 apiVerion: networking.k8s.io/v1
 kind: NetworkPolicy
 metadata:
   name: restrict-cross-namespace
   namespace: prod
spec:
  policyTypes:
  - Ingress
  podSelector: {}
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: prod
```
  
  ### [Secrets Management](https://github.com/Gourav-91/nodejs-demo/tree/main/secrets-management)
  **Manage kubernets secrets using [External Secrets Operator(ESO)](https://external-secrets.io/v0.5.5/provider-google-secrets-manager/) to manage external secrets like vault, google secrets manager, Azure vault** 

  > We have created a demo secret in gcp secret manager & it is being used inside the cluster "nodejs-demo" . We have created 2 defination files inside secret-management folder - external-secret.yaml & secret-store.yaml. By using this we can find the secret and use external secrets that we are looking for. By using this we are increasing the security of handling secrets. 

### KPT config sync:
> KPT config sync is a tool for managing kubernets configuration that provides a higher-level abstraction and automation for deploying and synchronizing configuration resources across multiplr enviornments. Config sync is a GitOps solution for managing and syncing configuration manifests from a Git repository to a kubernets cluster.
``` It follows Declarative approach , It has Centralized Management system, It allow us to manage root of the repository, env specific configurations such as dev,stage,prod and cluster specific configurations. Policy enforcement makes smoother by using config sync. ```


### [gke-terraform](https://github.com/Gourav-91/nodejs-demo/tree/main/gke-terraform) - 
This TFE code is for creating resources vpc, subnet, nodecluster, node-pool
1. Remember to change your variable components under terraform.tfvars
2. **Init**ialize Terraform: 
  ``` terraform init ```
3. **Plan** the deployment to see what resources will be created:
  ``` terraform plan ```
4. **Apply** the configuration to create the ***VPC, subnet, GKE cluster and node pool***
  ``` terraform apply ```
5. **Verify the Setup** : After Terraform successfully applies the configuration, check the GKE cluster
  ``` gcloud container clusters get-credentials <YOUR_CLUSTER_NAME> --region us-central1 --project <YOUR_PROJECT_ID> ```
6. **Verify the Namespaces:**
  ``` kubectl get nodes ```
