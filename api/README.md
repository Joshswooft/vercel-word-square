# Public API

The `vercel.json` file has a property set which means only functions in this directory are listed as serverless functions. Due to the limitation on the number of serverless functions allowed on the free plan it makes sense to seperate this into a seperate folder containing only the functions we need to expose.
