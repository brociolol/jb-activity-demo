module.exports = function configJSON(req) {
  return {
    workflowApiVersion: '1.1',
    metaData: {
      // the location of our icon file
      icon: `https://www.bounteous.com/public/static/c6ed191bba8bd368338f06324bbf45bf/6d161/salesforce_2x.png`,
      category: 'customer'
    },
    // For Custom Activity this must say, "REST"
    type: 'REST',
    lang: {
      'en-US': {
        name: 'SessionM Event',
        description: 'Fire a SessionM event'
      }
    },
    arguments: {
      execute: {
        // See: https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/how-data-binding-works.htm
        inArguments: [
          {
            "smUserID": "{{Contact.Attribute.JourneyEntrySource.User_ID}}"
          }
        ],
        outArguments: [],
        // Fill in the host with the host that this is running on.
        // It must run under HTTPS
        url: `https://jb-test-activity.herokuapp.com/execute`,
        // The amount of time we want Journey Builder to wait before cancel the request. Default is 60000, Minimal is 1000
        timeout: 10000,
        // how many retrys if the request failed with 5xx error or network error. default is 0
        retryCount: 3,
        // wait in ms between retry.
        retryDelay: 1000,
        // The number of concurrent requests Journey Builder will send all together
        concurrentRequests: 5
      }
    },
    configurationArguments: {
      publish: {
        url: `https://jb-test-activity.herokuapp.com/publish`
      },
      validate: {
        url: `https://jb-test-activity.herokuapp.com/validate`
      },
      stop: {
        url: `https://jb-test-activity.herokuapp.com/stop`
      }
    },
    userInterfaces: {
      configurationSupportsReadOnlyMode : true,
      configInspector: {
        size: 'scm-lg',
        emptyIframe: true
      }
    },
    schema: {
      arguments: {
        execute: {
          inArguments: [],
          outArguments: [{
            smUserID: {
              dataType: 'Text',
              direction: 'out',
              access: 'visible'
            }
          }]
        }
      }
    }
  };
};
