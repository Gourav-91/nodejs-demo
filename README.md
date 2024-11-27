
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

## Namespaces & Network Policies:
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
  
      