# Salesforce and Angular2 in Perfect Harmony

Building javascript based applications on Salesforce can be a difficult task due to the 
size limit on Static Resources, the fact that you have to use Static Resources in the
first place, and a number of other factors. This boilerplate aims to lessen the
headache a little bit by supplying you with a working Angular 2 application that can
be deployed to Salesforce with a simple Gulp command.

## Getting started

To get started:

```shell
git clone https://github.com/iDev0urer/salesforce-angular2-boilerplate.git
cd salesforce-angular2-boilerplate
npm install
...
cp .env.sample .env
```

Enter your Salesforce login details into the `.env` file and then run

```shell
gulp --local
```

If there were no errors you should now be running a local server with your future
Angular 2 application. To deploy it to Salesforce first copy the files in the `salesforce`
folder to your Org. These include 4 Apex classes and a Visualforce component that includes the necessary javascript in your
Visualforce page. Modify the classes as needed. Once you've copied the files to your org run

```shell
gulp dist
```

If all goes well your files will be compiled, minified, and uploaded to Salesforce as a
Static Resource. If you are logged in to Salesforce, when everything is done your browser
should open to your newly created Visualforce page.