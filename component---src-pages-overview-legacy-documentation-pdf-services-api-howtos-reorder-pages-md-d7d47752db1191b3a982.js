"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8524],{67537:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return c},default:function(){return u}});var t=r(87462),a=r(45987),o=(r(15007),r(64983)),i=r(91515);const s=["components"],c={},p=(d="CodeBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var d;const g={_frontmatter:c},l=i.Z;function u(e){let{components:n}=e,r=(0,a.Z)(e,s);return(0,o.mdx)(l,(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"reorder-pages"},"Reorder Pages"),(0,o.mdx)("h2",{id:"reorder-pages-in-pdf"},"Reorder Pages in PDF"),(0,o.mdx)("p",null,"The reorder pages operation moves pages from one location to another in\na PDF file."),(0,o.mdx)(p,{slots:"heading, code",repeat:"4",languages:"Java, .NET, Node JS, Rest API",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"java"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_java_samples\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.reorderpages.ReorderPDFPages\n \n public class ReorderPDFPages {\n\n   // Initialize the logger.\n   private static final Logger LOGGER = LoggerFactory.getLogger(ReorderPDFPages.class);\n\n   public static void main(String[] args) {\n       try {\n           // Initial setup, create credentials instance.\n           Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                   .fromFile("pdfservices-api-credentials.json")\n                   .build();\n\n           // Create an ExecutionContext using credentials and create a new operation instance.\n           ExecutionContext executionContext = ExecutionContext.create(credentials);\n           ReorderPagesOperation reorderPagesOperation = ReorderPagesOperation.createNew();\n\n           // Set operation input from a source file, along with specifying the order of the pages for\n           // rearranging the pages in a PDF file.\n           FileRef source = FileRef.createFromLocalFile("src/main/resources/reorderPagesInput.pdf");\n           PageRanges pageRanges = getPageRangeForReorder();\n           reorderPagesOperation.setInput(source);\n           reorderPagesOperation.setPagesOrder(pageRanges);\n\n           // Execute the operation.\n           FileRef result = reorderPagesOperation.execute(executionContext);\n\n           // Save the result to the specified location.\n           result.saveAs("output/reorderPagesOutput.pdf");\n\n       } catch (IOException | ServiceApiException | SdkException | ServiceUsageException e) {\n           LOGGER.error("Exception encountered while executing operation", e);\n       }\n   }\n\n   private static PageRanges getPageRangeForReorder() {\n       // Specify order of the pages for an output document.\n       PageRanges pageRanges = new PageRanges();\n       // Add pages 3 to 4.\n       pageRanges.addRange(3, 4);\n\n       // Add page 1.\n       pageRanges.addSinglePage(1);\n\n       return pageRanges;\n   }\n }\n')),(0,o.mdx)("h4",{id:"net"},".NET"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://www.adobe.com/go/pdftoolsapi_net_samples\n// Run the sample:\n// cd ReorderPages/\n// dotnet run ReorderPDFPages.csproj\n\n namespace ReorderPDFPages\n {\n   class Program\n   {\n       private static readonly ILog log = LogManager.GetLogger(typeof(Program));\n       static void Main()\n       {\n           // Configure the logging\n           ConfigureLogging();\n           try\n           {\n               // Initial setup, create credentials instance.\n               Credentials credentials = Credentials.ServiceAccountCredentialsBuilder()\n                               .FromFile(Directory.GetCurrentDirectory() + "/pdfservices-api-credentials.json")\n                               .Build();\n\n               // Create an ExecutionContext using credentials.\n               ExecutionContext executionContext = ExecutionContext.Create(credentials);\n\n               // Create a new operation instance\n               ReorderPagesOperation reorderPagesOperation = ReorderPagesOperation.CreateNew();\n\n               // Set operation input from a source file, along with specifying the order of the pages for\n               // rearranging the pages in a PDF file.\n               FileRef sourceFileRef = FileRef.CreateFromLocalFile(@"reorderPagesInput.pdf");\n               reorderPagesOperation.SetInput(sourceFileRef);\n               PageRanges pageRanges = GetPageRangeForReorder();\n               reorderPagesOperation.SetPagesOrder(pageRanges);\n\n               // Execute the operation.\n               FileRef result = reorderPagesOperation.Execute(executionContext);\n\n               // Save the result to the specified location.\n               result.SaveAs(Directory.GetCurrentDirectory() + "/output/reorderPagesOutput.pdf");\n           }\n           catch (ServiceUsageException ex)\n           {\n               log.Error("Exception encountered while executing operation", ex);\n           }\n           // Catch more errors here . . .\n       }\n\n       private static PageRanges GetPageRangeForReorder()\n       {\n           // Specify order of the pages for an output document.\n           PageRanges pageRanges = new PageRanges();\n           // Add pages 3 to 4.\n           pageRanges.AddRange(3, 4);\n\n           // Add page 1.\n           pageRanges.AddSinglePage(1);\n\n           return pageRanges;\n       }\n\n       static void ConfigureLogging()\n       {\n           ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());\n           XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));\n       }\n   }\n }\n')),(0,o.mdx)("h4",{id:"node-js"},"Node JS"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Get the samples from http://www.adobe.com/go/pdftoolsapi_node_sample\n// Run the sample:\n// node src/reorderpages/reorder-pdf-pages.js\n\n const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');\n\n const getPageRangeForReorder = () => {\n   // Specify order of the pages for an output document.\n   const pageRanges = new PDFServicesSdk.PageRanges();\n\n   // Add pages 3 to 4.\n   pageRanges.addPageRange(3, 4);\n\n   // Add page 1.\n   pageRanges.addSinglePage(1);\n\n   return pageRanges;\n };\n try {\n   // Initial setup, create credentials instance.\n   const credentials = PDFServicesSdk.Credentials\n       .serviceAccountCredentialsBuilder()\n       .fromFile(\"pdfservices-api-credentials.json\")\n       .build();\n\n   // Create an ExecutionContext using credentials and create a new operation instance.\n   const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),\n       reorderPagesOperation = PDFServicesSdk.ReorderPages.Operation.createNew();\n\n   // Set operation input from a source file, along with specifying the order of the pages for\n   // rearranging the pages in a PDF file.\n   const input = PDFServicesSdk.FileRef.createFromLocalFile('resources/reorderPagesInput.pdf');\n   const pageRanges = getPageRangeForReorder();\n   reorderPagesOperation.setInput(input);\n   reorderPagesOperation.setPagesOrder(pageRanges);\n\n   // Execute the operation and Save the result to the specified location.\n   reorderPagesOperation.execute(executionContext)\n       .then(result => result.saveAsFile('output/reorderPagesOutput.pdf'))\n       .catch(err => {\n           if(err instanceof PDFServicesSdk.Error.ServiceApiError\n               || err instanceof PDFServicesSdk.Error.ServiceUsageError) {\n               console.log('Exception encountered while executing operation', err);\n           } else {\n               console.log('Exception encountered while executing operation', err);\n           }\n       });\n } catch (err) {\n   console.log('Exception encountered while executing operation', err);\n }\n")),(0,o.mdx)("h4",{id:"rest-api"},"Rest API"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Please refer our Rest API docs for more information\n// https://documentcloud.adobe.com/document-services/index.html#post-combinePDF\n\ncurl --location --request POST \'https://cpf-ue1.adobe.io/ops/:create?respondWith=%7B%22reltype%22%3A%20%22http%3A%2F%2Fns.adobe.com%2Frel%2Fprimary%22%7D\' \\\n--header \'Authorization: Bearer {{Placeholder for token}}\' \\\n--header \'Accept: application/json, text/plain, */*\' \\\n--header \'x-api-key: {{Placeholder for client_id}}\' \\\n--header \'Prefer: respond-async,wait=0\' \\\n--form \'contentAnalyzerRequests="{\n    \\"cpf:inputs\\": {\n        \\"documentsIn\\": [{\n            \\"pageRanges\\": {\n                \\"cpf:inline\\": [{\n                    \\"start\\": 1,\n                    \\"end\\": 4\n                }]\n            },\n            \\"documentIn\\": {\n                \\"cpf:location\\": \\"InputFile0\\",\n                \\"dc:format\\": \\"application/pdf\\"\n            }\n        }, {\n            \\"pageRanges\\": {\n                \\"cpf:inline\\": [{\n                    \\"start\\": 1,\n                    \\"end\\": 25\n                }]\n            },\n            \\"documentIn\\": {\n                \\"cpf:location\\": \\"InputFile1\\",\n                \\"dc:format\\": \\"application/pdf\\"\n            }\n        }, {\n            \\"pageRanges\\": {\n                \\"cpf:inline\\": [{\n                    \\"start\\": 1\n                }, {\n                    \\"end\\": 25\n                }, {\n                    \\"start\\": 1,\n                    \\"end\\": 25\n                }]\n            },\n            \\"documentIn\\": {\n                \\"cpf:location\\": \\"InputFile2\\",\n                \\"dc:format\\": \\"application/pdf\\"\n            }\n        }]\n    },\n    \\"cpf:engine\\": {\n        \\"repo:assetId\\": \\"urn:aaid:cpf:Service-916ee91c156b42349a7847a7d564fb13\\"\n    },\n    \\"cpf:outputs\\": {\n        \\"documentOut\\": {\n            \\"cpf:location\\": \\"OutputFile\\",\n            \\"dc:format\\": \\"application/pdf\\"\n        }\n    }\n}"\' \\\n--form \'InputFile0=@"{{Placeholder for input file (absolute path)}}"\' \\\n--form \'InputFile1=@"{{Placeholder for input file (absolute path)}}"\' \\\n--form \'InputFile2=@"{{Placeholder for input file (absolute path)}}"\'\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-legacy-documentation-pdf-services-api-howtos-reorder-pages-md-d7d47752db1191b3a982.js.map