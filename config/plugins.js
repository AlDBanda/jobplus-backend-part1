
module.exports = ({ env }) => ({

  email: {
    config: {
      provider: 'strapi-provider-email-postmark', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('POSTMARK_API_KEY'),
      },
      settings: {
        defaultFrom: env('POSTMARK_FROM_EMAIL'),
        defaultReplyTo: env('POSTMARK_FROM_EMAIL'),
        testAddress: env('POSTMARK_FROM_EMAIL'),
      },
    },
  },

});
