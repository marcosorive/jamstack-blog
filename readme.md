# Jamstack Blog boilerplate

Hey! 👋

This is a boilerplate for a blog using Strapi as CMS and Next.js on the frontend!

## Test it out 🧪

Check the deployed version [here](https://jam-stack-blog.netlify.app/)!

## Deployment 🚀

The Strapi instance is deployed on Heroku and the frontend on Netlify. Database is set to the default that comes with Strapi, sqlite. So when Heroku kills the container, the DB is gone. You can use Heroku's free Postgres DB or Mongo atlas if you want real persistence.

This boilerplace includes a github action to deploy the backend to the servicies specified below. You need to specify the following environment variables in order for the pipeline to work as expected:

- **HEROKU_API_KEY**: API key provided by heroku.
- **HEROKU_APP_NAME**: App name where you want to deploy.
- **HEROKU_email**: email of your heroku account.
- **NETLIFY_AUTH_TOKEN**: API key provided by netlify.
- **NETLIFY_SITE_ID**: the site id of you app in netlify. 
