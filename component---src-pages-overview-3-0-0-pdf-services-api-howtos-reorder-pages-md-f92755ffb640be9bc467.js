"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4101],{34742:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return c},default:function(){return u}});var a,t=r(87462),o=r(63366),s=(r(15007),r(64983)),i=r(91515),d=["components"],c={},g=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),p={_frontmatter:c},l=i.Z;function u(e){var n=e.components,r=(0,o.Z)(e,d);return(0,s.mdx)(l,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"reorder-pages"},"Reorder Pages"),(0,s.mdx)("p",null,"Reorder the pages of a PDF file to reorganize."),(0,s.mdx)("h2",{id:"rest-api"},"Rest API"),(0,s.mdx)("p",null,"See our public API Reference for ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF"},"Reorder Pages")),(0,s.mdx)("h2",{id:"reorder-pages-in-pdf"},"Reorder Pages in PDF"),(0,s.mdx)("p",null,"The reorder pages operation moves pages from one location to another in\na PDF file."),(0,s.mdx)("p",null,"Please refer the ",(0,s.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,s.mdx)(g,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,s.mdx)("h4",{id:"java"},"Java"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.reorderpages.ReorderPDFPages\n \n public class ReorderPDFPages {\n\n   // Initialize the logger.\n   private static final Logger LOGGER = LoggerFactory.getLogger(ReorderPDFPages.class);\n\n   public static void main(String[] args) {\n       try {\n           // Initial setup, create credentials instance.\n           Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                   .fromFile("pdfservices-api-credentials.json")\n                   .build();\n\n           // Create an ExecutionContext using credentials and create a new operation instance.\n           ExecutionContext executionContext = ExecutionContext.create(credentials);\n           ReorderPagesOperation reorderPagesOperation = ReorderPagesOperation.createNew();\n\n           // Set operation input from a source file, along with specifying the order of the pages for\n           // rearranging the pages in a PDF file.\n           FileRef source = FileRef.createFromLocalFile("src/main/resources/reorderPagesInput.pdf");\n           PageRanges pageRanges = getPageRangeForReorder();\n           reorderPagesOperation.setInput(source);\n           reorderPagesOperation.setPagesOrder(pageRanges);\n\n           // Execute the operation.\n           FileRef result = reorderPagesOperation.execute(executionContext);\n\n           // Save the result to the specified location.\n           result.saveAs("output/reorderPagesOutput.pdf");\n\n       } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n           LOGGER.error("Exception encountered while executing operation", e);\n       }\n   }\n\n   private static PageRanges getPageRangeForReorder() {\n       // Specify order of the pages for an output document.\n       PageRanges pageRanges = new PageRanges();\n       // Add pages 3 to 4.\n       pageRanges.addRange(3, 4);\n\n       // Add page 1.\n       pageRanges.addSinglePage(1);\n\n       return pageRanges;\n   }\n }\n')),(0,s.mdx)("h4",{id:"net"},".NET"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd ReorderPages/\n// dotnet run ReorderPDFPages.csproj\n\n namespace ReorderPDFPages\n {\n   class Program\n   {\n       private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n       static void Main()\n       {\n           // Configure the logging\n           ConfigureLogging();\n           try\n           {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                               .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                               .Build();\n\n               // Create an ExecutionContext using credentials.\n               ExecutionContext executionContext = ExecutionContext.Create(credentials);\n\n               // Create a new operation instance\n               ReorderPagesOperation reorderPagesOperation = ReorderPagesOperation.CreateNew();\n\n               // Set operation input from a source file, along with specifying the order of the pages for\n               // rearranging the pages in a PDF file.\n               FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"reorderPagesInput.pdf");\n               reorderPagesOperation.SetInput(sourceFileRef);\n               PageRanges pageRanges = GetPageRangeForReorder();\n               reorderPagesOperation.SetPagesOrder(pageRanges);\n\n               // Execute the operation.\n               FileRef result = reorderPagesOperation.Execute(executionContext);\n\n               // Save the result to the specified location.\n               result.SaveAs(Directory.GetCurrentDirectory() + "/output/reorderPagesOutput.pdf");\n           }\n           catch (ServiceUsageException ex)\n           {\n               log.Error("Exception encountered while executing operation", ex);\n           }\n           // Catch more errors here . . .\n       }\n\n       private static PageRanges GetPageRangeForReorder()\n       {\n           // Specify order of the pages for an output document.\n           PageRanges pageRanges = new PageRanges();\n           // Add pages 3 to 4.\n           pageRanges.AddRange(3, 4);\n\n           // Add page 1.\n           pageRanges.AddSinglePage(1);\n\n           return pageRanges;\n       }\n\n       static void ConfigureLogging()\n       {\n           ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n           XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n       }\n   }\n }\n')),(0,s.mdx)("h4",{id:"node-js"},"Node JS"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/reorderpages/reorder-pdf-pages.js\n\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n const getPageRangeForReorder = () => {\n   // Specify order of the pages for an output document.\n   const pageRanges = new PDFServicesSdk.PageRanges();\n\n   // Add pages 3 to 4.\n   pageRanges.addPageRange(3, 4);\n\n   // Add page 1.\n   pageRanges.addSinglePage(1);\n\n   return pageRanges;\n };\n try {\n   // Initial setup, create credentials instance.\n   const credentials = PDFServicesSdk.Credentials\n       .serviceAccountCredentialsBuilder()\n       .fromFile(\"pdfservices-api-credentials.json\")\n       .build();\n\n   // Create an ExecutionContext using credentials and create a new operation instance.\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n       reorderPagesOperation = PDFServicesSdk.ReorderPages.Operation.createNew();\n\n   // Set operation input from a source file, along with specifying the order of the pages for\n   // rearranging the pages in a PDF file.\n   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/reorderPagesInput.pdf');\n   const pageRanges = getPageRangeForReorder();\n   reorderPagesOperation.setInput(input);\n   reorderPagesOperation.setPagesOrder(pageRanges);\n\n   // Execute the operation and Save the result to the specified location.\n   reorderPagesOperation.execute(executionContext)\n       .then(result => result.saveAsFile('output/reorderPagesOutput.pdf'))\n       .catch(err => {\n           if(err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n } catch (err) {\n   console.log('Exception encountered while executing operation', err);\n }\n")),(0,s.mdx)("h4",{id:"rest-api-1"},"Rest API"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/Combine-PDF\n\ncurl --location --request POST \'https://pdf-services.adobe.io/operation/combinepdf\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--data-raw \'{\n    "assets": [\n        {\n            "assetID": "urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718",\n            "pageRanges": [\n                {\n                    "start": 3,\n                    "end": 3\n                },\n                {\n                    "start": 1,\n                    "end": 1\n                },\n                {\n                    "start": 4,\n                    "end": 4\n                }\n            ]\n        }\n    ]\n}\'\n\n// Legacy API can be found here \n// https://documentcloud.adobe.com/document-services/index.html#post-combinePDF\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-0-0-pdf-services-api-howtos-reorder-pages-md-f92755ffb640be9bc467.js.map