"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7231],{84922:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return u}});var n=t(87462),o=t(45987),i=(t(15007),t(64983)),r=t(91515);const l=["components"],s={},d=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var p;const m={_frontmatter:s},c=r.Z;function u(e){let{components:a}=e,t=(0,o.Z)(e,l);return(0,i.mdx)(c,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"quickstarts"},"Quickstarts"),(0,i.mdx)("p",null,"PDF Accessibility Auto-Tag API is available as SDKs to help you get up and running quickly. You can then leverage the samples in your own code"),(0,i.mdx)("h2",{id:"get-early-access"},"Get Early Access"),(0,i.mdx)("p",null,"The PDF Accessibility Auto-Tag API is currently available as Early Access. To request access, ",(0,i.mdx)("a",{parentName:"p",href:"https://adobe.com/go/accessibility_early_access_form"},"Contact Us"),". Once you receive confirmation that you’ve been given access, proceed to the next step to ",(0,i.mdx)("a",{parentName:"p",href:"quickstarts/#get-api-credentials"},"Get API credentials"),"."),(0,i.mdx)("h2",{id:"get-api-credentials"},"Get API credentials"),(0,i.mdx)("p",null,"Calling the PDF Accessibility Auto-Tag API requires an Adobe-provided credential. To get one, ",(0,i.mdx)("a",{parentName:"p",href:"https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-accessibility-auto-tag-api"},"click here")," and complete the workflow. Be sure to copy and save the credential values to a secure location."),(0,i.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"During the credential creation process you'll be asked to whether you'd like a ",(0,i.mdx)("strong",{parentName:"p"},"Personalized Code Sample Download"),". Choosing ",(0,i.mdx)("em",{parentName:"p"},"Personalized")," preconfigures the samples with your credential and removes a few steps from your development setup process."),(0,i.mdx)("h2",{id:"install-sdk-and-samples"},"Install SDK and samples"),(0,i.mdx)("p",null,"PDF Accessibility Auto-Tag API is available as SDKs in Java and Python."),(0,i.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Please allow-list the following hostnames before using Adobe PDF Services SDK:",(0,i.mdx)("ul",null,(0,i.mdx)("li",null,"ims-na1.adobelogin.com"),(0,i.mdx)("li",null,"cpf-ue1.adobe.io"))),(0,i.mdx)("h3",{id:"java"},"Java"),(0,i.mdx)("p",null,"Jumpstart your development by bookmarking or downloading the following key resources:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"This document"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/pdfservices-java-sdk-samples/apidocs/beta/"},"API reference (Javadoc)")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/tree/beta"},"Java sample code")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.adobe.com/go/pdftoolsapi_java_maven"},"Java library"),". The Maven project contains the .jar file.")),(0,i.mdx)("h4",{id:"authentication"},"Authentication"),(0,i.mdx)("p",null,"Once you complete the ",(0,i.mdx)("a",{parentName:"p",href:"quickstarts/#get-api-credentials"},"Get API credentials"),", a zip file automatically downloads that contains content whose structure varies based on whether you opted to download personalized code samples. The zip file structures are as follows:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Personalized Download"),": The samples download zip contains a private.key file and an adobe-dc-pdf-services-sdk-java-samples with a preconfigured pdfservices-api-credentials.json file."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Non Personalized Download"),": The samples download zip contains the private.key file and a pdfservices-api-credentials.json file.")),(0,i.mdx)("p",null,"After downloading the zip, you can either run the samples in the zip directly, or you can replace the pdfservices-api-credentials.json and private.key files in the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/pdfservices-java-sdk-samples/tree/beta"},"Java sample code")," with those in the zip."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example pdfservices-api-credentials.json file")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "client_credentials": {\n   "client_id": "<YOUR_CLIENT_ID>",\n   "client_secret": "<YOUR_CLIENT_SECRET>"\n },\n "service_account_credentials": {\n   "organization_id": "<YOUR_ORGANIZATION_ID>",\n   "account_id": "<YOUR_TECHNICAL_ACCOUNT_ID>",\n   "private_key_file": "<PRIVATE_KEY_FILE_PATH>"\n }\n}\n')),(0,i.mdx)("h4",{id:"install-java-and-maven"},"Install Java and Maven"),(0,i.mdx)("p",null,"Skip this step if you already have Java and Maven running on your computer."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install ",(0,i.mdx)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/downloads/#java8"},"Java"),". The SDK has been tested with Java 8, but it should also work with newer versions."),(0,i.mdx)("li",{parentName:"ol"},"Verify your installation by running this command ",(0,i.mdx)("inlineCode",{parentName:"li"},"javac -version"),"."),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Download")," and ",(0,i.mdx)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"install")," Maven. The SDK works with maven 3.8.1 or newer versions."),(0,i.mdx)("li",{parentName:"ol"},"Verify your installation by running this command: ",(0,i.mdx)("inlineCode",{parentName:"li"},"mvn -version"),".")),(0,i.mdx)("h5",{id:"option-1-personalized-samples-setup"},"Option 1: Personalized samples setup"),(0,i.mdx)("p",null,"The quickest way to get up and running is to download the personalized code samples during the Get API credentials workflow. These samples provide everything from ready-to-run sample code, an embedded credential json file, and pre-configured connections to dependencies."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Download and extract the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/tree/beta"},"Java sample project"),"."),(0,i.mdx)("li",{parentName:"ol"},"Cd to the project directory (which contains pom.xml file) and build the sample project with Maven using this command in terminal: ",(0,i.mdx)("inlineCode",{parentName:"li"},"mvn clean install"),"."),(0,i.mdx)("li",{parentName:"ol"},"You can import the samples Maven project into your preferred IDE and run the samples from there or run the below commands from terminal:")),(0,i.mdx)("h6",null,"To generate tagged PDF of version 1.7 from the sample file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDF\n")),(0,i.mdx)("p",null,"Note: The above commands run on the input file “autotagPdfInput.pdf” present in “src/main/resources” directory and generate result in “output” directory inside the project. If the output files already exist, the commands will report an error."),(0,i.mdx)("h5",{id:"option-2-generic-samples-setup"},"Option 2: Generic samples setup"),(0,i.mdx)("p",null,"If you did not choose ",(0,i.mdx)("strong",{parentName:"p"},"Personalized Code Sample Download")," during the credential setup process:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Download and extract the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-java-sdk-samples/tree/beta"},"Java sample project"),"."),(0,i.mdx)("li",{parentName:"ol"},"Copy the downloaded zip to the directory that you set-up for this project and unzip the files there."),(0,i.mdx)("li",{parentName:"ol"},"In the top-level directory of your samples, find and replace following files with the one present in the downloaded zip file from ",(0,i.mdx)("a",{parentName:"li",href:"quickstarts/#get-api-credentials"},"Get API credentials")," step:",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"pdfservices-api-credentials.json"),(0,i.mdx)("li",{parentName:"ol"},"private.key"))),(0,i.mdx)("li",{parentName:"ol"},"Cd to the project directory (which contains pom.xml file) and build the sample project with Maven using this command in terminal: ",(0,i.mdx)("inlineCode",{parentName:"li"},"mvn clean install"),"."),(0,i.mdx)("li",{parentName:"ol"},"You can import the samples Maven project into your preferred IDE and run the samples from there or run the below commands from terminal:")),(0,i.mdx)("h6",null,"To generate tagged PDF of version 1.7 from the sample file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDF\n")),(0,i.mdx)("p",null,"Note: The above commands run on the input file “autotagPdfInput.pdf” present in “src/main/resources” directory and generate result in “output” directory inside the project. If the output files already exist, the commands will report an error."),(0,i.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),"Other sample programs in the SDK let you try out API options including generating a tagging report, and shifting headings so that the document title is only H1.",(0,i.mdx)("h3",{id:"python"},"Python"),(0,i.mdx)("p",null,"Jumpstart your development by bookmarking or downloading the following key resources:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"This document"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://opensource.adobe.com/pdfservices-python-sdk-samples/apidocs/beta/"},"Python API reference")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-python-sdk-samples/tree/beta"},"Python sample code")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://www.adobe.com/go/pdfservices_python_pypi"},"Python SDK"))),(0,i.mdx)("h4",{id:"authentication-1"},"Authentication"),(0,i.mdx)("p",null,"Once you complete the ",(0,i.mdx)("a",{parentName:"p",href:"quickstarts/#get-api-credentials"},"Get API credentials"),", a zip file automatically downloads that contains content whose structure varies based on whether you opted to download personalized code samples. The zip file structures are as follows:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Personalized Download"),": The samples download.zip contains a private.key file and an adobe-dc-pdfservices-sdk-python-samples directory. Each sample directory contains the sample code as well as a preconfigured pdfservices-api-credentials.json file."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Non Personalized Download"),": The samples download zip contains the private.key file and a pdfservices-api-credentials.json file.")),(0,i.mdx)("p",null,"After downloading the zip, you can either run the samples in the zip directly, or you can replace the pdfservices-api-credentials.json and private.key files in the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/pdfservices-python-sdk-samples/tree/beta"},"Python sample code")," with those in the zip."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example pdfservices-api-credentials.json file")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "client_credentials": {\n     "client_id": " <YOUR_CLIENT_ID> ",\n     "client_secret": " <YOUR_CLIENT_SECRET> "\n  },\n  "service_account_credentials": {\n     "organization_id": " <YOUR_ORGANIZATION_ID> ",\n     "account_id": " <YOUR_TECHINCAL_ACCOUNT_ID> ",\n     "private_key_file": "private.key"\n  }\n}\n')),(0,i.mdx)("h4",{id:"install-python"},"Install Python"),(0,i.mdx)("p",null,"Skip this step if you already have Python running on your computer."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install ",(0,i.mdx)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"Python 3.7")," or higher."),(0,i.mdx)("li",{parentName:"ol"},"Verify your installation by running this command: ",(0,i.mdx)("inlineCode",{parentName:"li"},"python --version"),".")),(0,i.mdx)("h5",{id:"option-1-personalized-samples-setup-1"},"Option 1: Personalized samples setup"),(0,i.mdx)("p",null,"The quickest way to get up and running is to download the personalized code samples during the Get API credentials workflow. These samples provide everything from ready-to-run sample code, an embedded credential json file, and pre-configured connections to dependencies."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Download and extract the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-python-sdk-samples/tree/beta"},"Python sample project"),"."),(0,i.mdx)("li",{parentName:"ol"},"Cd to the project directory (which contains requirements.txt file) and build the sample project using this command in terminal: ",(0,i.mdx)("inlineCode",{parentName:"li"},"pip install -r requirements.txt"),"."),(0,i.mdx)("li",{parentName:"ol"},"You can import the samples project into your preferred IDE and run the samples from there or run the below commands from terminal:")),(0,i.mdx)("h6",null,"To generate tagged PDF of version 1.7 from the sample file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"python src/autotagpdf/autotag_pdf.py\n")),(0,i.mdx)("p",null,"Note: The above commands run on the input file “autotagPdfInput.pdf” present in “src/main/resources” directory and generate result in “output” directory inside the project. If the output files already exist, the commands will report an error."),(0,i.mdx)("h5",{id:"option-2-generic-samples-setup-1"},"Option 2: Generic samples setup"),(0,i.mdx)("p",null,"If you did not choose ",(0,i.mdx)("strong",{parentName:"p"},"Personalized Code Sample Download")," during the credential setup process:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Download and extract the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/pdfservices-python-sdk-samples/tree/beta"},"Python sample project"),"."),(0,i.mdx)("li",{parentName:"ol"},"Copy the downloaded zip to the directory that you set-up for this project and unzip the files there."),(0,i.mdx)("li",{parentName:"ol"},"In the top-level directory of your samples, find and replace following files with the one present in the downloaded zip file from ",(0,i.mdx)("a",{parentName:"li",href:"quickstarts/#get-api-credentials"},"Get API credentials")," step:",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"pdfservices-api-credentials.json"),(0,i.mdx)("li",{parentName:"ol"},"private.key"))),(0,i.mdx)("li",{parentName:"ol"},"Cd to the project directory (which contains requirements.txt file) and build the sample project using this command in terminal: ",(0,i.mdx)("inlineCode",{parentName:"li"},"pip install -r requirements.txt"),"."),(0,i.mdx)("li",{parentName:"ol"},"You can import the samples into your preferred IDE and run the samples from there or run the below commands from terminal:")),(0,i.mdx)("h6",null,"To generate tagged PDF of version 1.7 from the sample file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"python src/autotagpdf/autotag_pdf.py\n")),(0,i.mdx)("p",null,"Note: The above commands run on the input file “autotagPdfInput.pdf” present in “src/main/resources” directory and generate result in “output” directory inside the project. If the output files already exist, the commands will report an error."),(0,i.mdx)(d,{slots:"text",mdxType:"InlineAlert"}),"Other sample programs in the SDK let you try out API options including generating a tagging report, and shifting headings so that the document title is only H1.")}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-legacy-documentation-pdf-accessibility-auto-tag-api-quickstarts-md-2827722375d0509edc2c.js.map