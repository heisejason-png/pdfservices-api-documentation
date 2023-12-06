"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3665],{38281:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return u}});var a=t(87462),o=t(45987),r=(t(15007),t(64983)),i=t(91515);const s=["components"],c={},l=(p="CodeBlock",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var p;const g={_frontmatter:c},d=i.Z;function u(e){let{components:n}=e,t=(0,o.Z)(e,s);return(0,r.mdx)(d,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"delete-pages"},"Delete Pages"),(0,r.mdx)("h2",{id:"delete-pages-in-a-pdf"},"Delete Pages in a PDF"),(0,r.mdx)("p",null,"The delete pages operation selectively removes pages from a PDF file."),(0,r.mdx)(l,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.deletepages.DeletePDFPages\n \n     \n   public class DeletePDFPages {\n\n   // Initialize the logger.\n   private static final Logger LOGGER = LoggerFactory.getLogger(DeletePDFPages.class);\n\n   public static void main(String[] args) {\n       try {\n           // Initial setup, create credentials instance.\n           Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                   .fromFile("pdfservices-api-credentials.json")\n                   .build();\n\n           // Create an ExecutionContext using credentials and create a new operation instance.\n           ExecutionContext executionContext = ExecutionContext.create(credentials);\n           DeletePagesOperation deletePagesOperation = DeletePagesOperation.createNew();\n\n           // Set operation input from a source file.\n           FileRef source = FileRef.createFromLocalFile("src/main/resources/deletePagesInput.pdf");\n           deletePagesOperation.setInput(source);\n\n           // Delete pages of the document (as specified by PageRanges).\n           PageRanges pageRangeForDeletion = getPageRangeForDeletion();\n           deletePagesOperation.setPageRanges(pageRangeForDeletion);\n\n           // Execute the operation.\n           FileRef result = deletePagesOperation.execute(executionContext);\n\n           // Save the result to the specified location.\n           result.saveAs("output/deletePagesOutput.pdf");\n\n       } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n           LOGGER.error("Exception encountered while executing operation", e);\n       }\n   }\n\n   private static PageRanges getPageRangeForDeletion() {\n       // Specify pages for deletion.\n       PageRanges pageRangeForDeletion = new PageRanges();\n       // Add page 1.\n       pageRangeForDeletion.addSinglePage(1);\n\n       // Add pages 3 to 4.\n       pageRangeForDeletion.addRange(3, 4);\n       return pageRangeForDeletion;\n   }\n }\n')),(0,r.mdx)("h4",{id:"net"},".NET"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd DeletePDFPages/\n// dotnet run DeletePDFPages.csproj\n\n    namespace DeletePDFPages\n    {\n      class Program\n      {\n          private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n          static void Main()\n          {\n              // Configure the logging\n              ConfigureLogging();\n              try\n              {\n                  // Initial setup, create credentials instance.\n                  Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                                  .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                                  .Build();\n   \n                  // Create an ExecutionContext using credentials.\n                  ExecutionContext executionContext = ExecutionContext.Create(credentials);\n   \n                  // Create a new operation instance\n                  DeletePagesOperation deletePagesOperation = DeletePagesOperation.CreateNew();\n   \n                  // Set operation input from a source file.\n                  FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"deletePagesInput.pdf");\n                  deletePagesOperation.SetInput(sourceFileRef);\n   \n                  // Delete pages of the document (as specified by PageRanges).\n                  PageRanges pageRangeForDeletion = GetPageRangeForDeletion();\n                  deletePagesOperation.SetPageRanges(pageRangeForDeletion);\n   \n                  // Execute the operation.\n                  FileRef result = deletePagesOperation.Execute(executionContext);\n   \n                  // Save the result to the specified location.\n                  result.SaveAs(Directory.GetCurrentDirectory() + "/output/deletePagesOutput.pdf");\n              }\n              catch (ServiceUsageException ex)\n              {\n                  log.Error("Exception encountered while executing operation", ex);\n              }\n              // Catch more errors here . . .\n          }\n   \n          private static PageRanges GetPageRangeForDeletion()\n          {\n              // Specify pages for deletion.\n              PageRanges pageRangeForDeletion = new PageRanges();\n              // Add page 1.\n              pageRangeForDeletion.AddSinglePage(1);\n   \n              // Add pages 3 to 4.\n              pageRangeForDeletion.AddRange(3, 4);\n              return pageRangeForDeletion;\n          }\n   \n          static void ConfigureLogging()\n          {\n              ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n              XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n          }\n      }\n    }\n')),(0,r.mdx)("h4",{id:"node-js"},"Node JS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/replacepages/replace-pdf-pages.js\n\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n const getPageRangesForDeletion = () => {\n   // Specify pages for deletion.\n   const pageRangesForDeletion = new PDFServicesSdk.PageRanges();\n   // Add page 1.\n   pageRangesForDeletion.addSinglePage(1);\n\n   // Add pages 3 to 4.\n   pageRangesForDeletion.addPageRange(3, 4);\n   return pageRangesForDeletion;\n };\n\n try {\n   // Initial setup, create credentials instance.\n   const credentials = PDFServicesSdk.Credentials\n       .serviceAccountCredentialsBuilder()\n       .fromFile(\"pdfservices-api-credentials.json\")\n       .build();\n\n   // Create an ExecutionContext using credentials and create a new operation instance.\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n       deletePagesOperation = PDFServicesSdk.DeletePages.Operation.createNew();\n\n   // Set operation input from a source file.\n   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/deletePagesInput.pdf');\n   deletePagesOperation.setInput(input);\n\n   // Delete pages of the document (as specified by PageRanges).\n   const pageRangesForDeletion = getPageRangesForDeletion();\n   deletePagesOperation.setPageRanges(pageRangesForDeletion);\n\n   // Execute the operation and Save the result to the specified location.\n   deletePagesOperation.execute(executionContext)\n       .then(result => result.saveAsFile('output/deletePagesOutput.pdf'))\n       .catch(err => {\n           if (err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n } catch (err) {\n   console.log('Exception encountered while executing operation', err);\n }\n")),(0,r.mdx)("h4",{id:"rest-api"},"Rest API"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information\n// https://documentcloud.adobe.com/document-services/index.html#post-pageManipulation\n\ncurl --location --request POST \'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--header \'Accept: application/json, text/plain, */*\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Prefer: respond-async,wait=0\' \\\n--form \'contentAnalyzerRequests="{\n    \\"cpf:inputs\\": {\n        \\"params\\": {\n            \\"cpf:inline\\": {\n                \\"pageActions\\": [{\n                    \\"pageAction\\": {\n                        \\"delete\\": {\n                            \\"pageRanges\\": [{\n                                \\"start\\": 1,\n                                \\"end\\": 1\n                            }]\n                        }\n                    }\n                }]\n            }\n        },\n        \\"documentIn\\": {\n            \\"cpf:location\\": \\"InputFile0\\",\n            \\"dc:format\\": \\"application/pdf\\"\n        }\n    },\n    \\"cpf:engine\\": {\n        \\"repo:assetId\\": \\"urn:aaid:cpf:Service-4735fcf3cf924b25879e6fcf7aa84ad4\\"\n    },\n    \\"cpf:outputs\\": {\n        \\"documentOut\\": {\n            \\"cpf:location\\": \\"cid:multipartLabelOut\\",\n            \\"dc:format\\": \\"application/pdf\\"\n        }\n    }\n}"\' \\\n--form \'InputFile0=@"{{Placeholder for input file (absolute path)}}"\'\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-legacy-documentation-pdf-services-api-howtos-delete-pages-md-f53c054a0d6f9bf01609.js.map