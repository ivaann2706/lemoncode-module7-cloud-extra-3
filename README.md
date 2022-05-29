# Cloud Module - Exercise extra 3

In this repository, a front application is deployed automatically in Vercel.

The continuous deployment flow has also been defined in the vercel-cd.yml file, so that it is deployed in Vercel every time a push is made on master.

The deployed app can be found at https://lemoncode-module7-cloud-extra-3-ivaann2706.vercel.app/

Steps:

- npm i -g vercel
- vercel login
- vercel link
- token creation in vercel
- Save in github secrets the projectId, the orgId and the vercel token
  (the projectId and the orgId are taken from the automatically created .vercel/project.json file)
- write vercel-cd.yml file
- modify Build & Development Settings in vercel
