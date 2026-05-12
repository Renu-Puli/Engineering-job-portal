export interface InterviewQA {
  question: string;
  answer: string;
}

export const interviewQuestions: Record<string, InterviewQA[]> = {
  Frontend: [
    {
      question: "What is React and how does it work?",
      answer: "React is a JavaScript library for building user interfaces. It works by creating a Virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the actual browser DOM."
    },
    {
      question: "Explain the Virtual DOM and its benefits.",
      answer: "The Virtual DOM is a lightweight representation of the real DOM. When the state changes, React updates the Virtual DOM first, then calculates the difference (diffing) and updates only the changed parts in the real DOM, which is much faster than re-rendering everything."
    },
    {
      question: "What are hooks in React? Name some commonly used ones.",
      answer: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Common ones include useState, useEffect, useContext, useMemo, and useCallback."
    },
    {
      question: "What is JSX?",
      answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code inside your JavaScript files, making it easier to visualize the UI structure."
    },
    {
      question: "Explain the difference between state and props.",
      answer: "Props (short for properties) are passed to a component from its parent and are immutable within that component. State is managed within the component and can change over time, triggering re-renders."
    },
    {
      question: "What is the use of useEffect hook?",
      answer: "The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. it serves a similar purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined."
    },
    {
      question: "What are controlled and uncontrolled components?",
      answer: "Controlled components are those where form data is handled by a React component state. Uncontrolled components are those where form data is handled by the DOM itself using refs."
    },
    {
      question: "Explain the significance of 'key' in React lists.",
      answer: "Keys help React identify which items have changed, been added, or removed. They should be unique among siblings to optimize the rendering process during the diffing algorithm."
    },
    {
      question: "What is Redux and when should you use it?",
      answer: "Redux is a pattern and library for managing and updating global application state. You should use it when you have a complex state that needs to be accessed by many components at different nesting levels."
    },
    {
      question: "What is the difference between useMemo and useCallback?",
      answer: "useMemo returns a memoized value, while useCallback returns a memoized function. Both are used for performance optimization to avoid unnecessary re-calculations or re-renders."
    },
    {
      question: "What is CSS Flexbox and Grid?",
      answer: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. CSS Grid is a two-dimensional layout system that can handle both rows and columns simultaneously."
    },
    {
      question: "Explain Hoisting in JavaScript.",
      answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. This means variables and functions can be used before they are declared."
    },
    {
      question: "What is a Closure in JavaScript?",
      answer: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). It gives you access to an outer function's scope from an inner function."
    },
    {
      question: "Difference between let, const, and var.",
      answer: "var is function-scoped and can be re-declared. let and const are block-scoped; let can be re-assigned, while const cannot (it's a constant reference)."
    },
    {
      question: "What is an arrow function?",
      answer: "Arrow functions are a concise way to write functions in JS. They do not have their own 'this' context, instead inheriting 'this' from the enclosing scope."
    },
    {
      question: "Explain the 'this' keyword in JavaScript.",
      answer: "The 'this' keyword refers to the object it belongs to. Its value depends on how the function is called (e.g., global context, object method, constructor, or event handler)."
    },
    {
      question: "What are Promises and async/await?",
      answer: "Promises represent the eventual completion (or failure) of an asynchronous operation. async/await is syntactic sugar built on top of promises that makes asynchronous code look and behave more like synchronous code."
    },
    {
      question: "What is the Event Loop?",
      answer: "The Event Loop is a mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded by offloading operations to the system kernel whenever possible."
    },
    {
      question: "Explain Prototypal Inheritance.",
      answer: "In JavaScript, objects inherit features from one another through a prototype chain. Every object has a private property which holds a link to another object called its prototype."
    },
    {
      question: "What is a higher-order component (HOC)?",
      answer: "An HOC is a function that takes a component and returns a new component, usually adding some shared functionality or data."
    },
    {
      question: "How do you optimize a React application's performance?",
      answer: "Optimization techniques include code-splitting (React.lazy), memoization (useMemo, useCallback, React.memo), avoiding anonymous functions in props, and using the production build."
    },
    {
      question: "What is the purpose of React.memo?",
      answer: "React.memo is a higher-order component that prevents a functional component from re-rendering if its props haven't changed."
    },
    {
      question: "Explain Server-Side Rendering (SSR) vs Client-Side Rendering (CSR).",
      answer: "In SSR, the server generates the full HTML for a page and sends it to the browser. In CSR, the browser downloads a minimal HTML page and uses JavaScript to render the content."
    },
    {
      question: "What is a Single Page Application (SPA)?",
      answer: "An SPA is a web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of loading entire new pages."
    },
    {
      question: "How do you handle errors in React components?",
      answer: "Errors can be handled using Error Boundaries (class components with getDerivedStateFromError or componentDidCatch) or try-catch blocks in event handlers and effects."
    },
    {
      question: "What is the difference between == and ===?",
      answer: "== performs type coercion before comparison (loose equality), while === compares both value and type without coercion (strict equality)."
    },
    {
      question: "What is localStorage and sessionStorage?",
      answer: "Both allow storing key-value pairs in the browser. localStorage persists even after the browser is closed, while sessionStorage is cleared when the page session ends (tab is closed)."
    },
    {
      question: "Explain the box model in CSS.",
      answer: "The box model consists of content, padding, border, and margin. It defines how the total width and height of an element are calculated."
    },
    {
      question: "What is responsive web design?",
      answer: "Responsive design is an approach where a website's layout adjusts automatically to provide an optimal viewing experience across different devices and screen sizes using media queries."
    },
    {
      question: "What is a REST API?",
      answer: "REST stands for Representational State Transfer. It is an architectural style for designing networked applications using standard HTTP methods like GET, POST, PUT, and DELETE."
    },
    {
      question: "How do you handle API calls in React?",
      answer: "API calls are typically made inside the useEffect hook using the fetch API or libraries like Axios. The data is then stored in the component's state."
    },
    {
      question: "What is TypeScript and why use it with React?",
      answer: "TypeScript is a typed superset of JavaScript. It helps catch errors early during development, provides better IDE support, and makes the code more maintainable through explicit types."
    },
    {
      question: "Explain the difference between interface and type in TypeScript.",
      answer: "Interfaces are primarily used for defining object shapes and can be extended. Types can define objects but also unions, primitives, and tuples. Interfaces are generally preferred for public APIs."
    },
    {
      question: "What is Webpack?",
      answer: "Webpack is a static module bundler. It takes your code and its dependencies and transforms them into a small number of bundles that the browser can understand."
    },
    {
      question: "What is Babel?",
      answer: "Babel is a JavaScript compiler that converts modern ECMAScript code into backwards-compatible versions that can run in older browsers."
    },
    {
      question: "Explain the concept of 'Lifting State Up'.",
      answer: "Lifting state up involves moving shared state to the closest common ancestor of the components that need it, so they can stay in sync."
    },
    {
      question: "What is React Context API?",
      answer: "The Context API provides a way to pass data through the component tree without having to pass props down manually at every level."
    },
    {
      question: "How do you handle forms in React?",
      answer: "Forms are usually handled as controlled components where every input's value is linked to a state variable and updated via an onChange handler."
    },
    {
      question: "What are fragments in React?",
      answer: "Fragments (<> or <React.Fragment>) let you group a list of children without adding extra nodes to the DOM."
    },
    {
      question: "What is the difference between a functional and class component?",
      answer: "Functional components are simpler and use hooks for state/lifecycle. Class components use ES6 classes and have explicit lifecycle methods like componentDidMount."
    },
    {
      question: "What is the purpose of the 'alt' attribute in images?",
      answer: "The 'alt' attribute provides alternative text for an image if it cannot be displayed, which is crucial for accessibility (screen readers) and SEO."
    },
    {
      question: "How do you make a website accessible (A11y)?",
      answer: "Techniques include using semantic HTML, providing alt text, ensuring keyboard navigability, using ARIA labels, and maintaining sufficient color contrast."
    },
    {
      question: "What is a Progressive Web App (PWA)?",
      answer: "A PWA is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript, and intended to work on any platform that uses a standards-compliant browser."
    },
    {
      question: "Explain Cross-Origin Resource Sharing (CORS).",
      answer: "CORS is a security feature that allows a server to specify any origins other than its own from which a browser should permit loading resources."
    },
    {
      question: "What is a JWT (JSON Web Token)?",
      answer: "JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It's commonly used for authentication and information exchange."
    },
    {
      question: "How do you test React components?",
      answer: "React components are tested using libraries like Jest (test runner) and React Testing Library or Enzyme (for rendering and interacting with components)."
    },
    {
      question: "What is Jest and Enzyme?",
      answer: "Jest is a JavaScript testing framework. Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output."
    },
    {
      question: "Explain the concept of 'Debouncing' and 'Throttling'.",
      answer: "Debouncing ensures that a function is only called after a certain period of inactivity. Throttling ensures that a function is called at most once in a specified time interval."
    },
    {
      question: "What is the difference between a shallow copy and a deep copy?",
      answer: "A shallow copy clones the top-level properties but keeps references to nested objects. A deep copy clones everything recursively, creating entirely new objects for all levels."
    },
    {
      question: "How does the browser render a web page?",
      answer: "The browser parses HTML to build the DOM, parses CSS to build the CSSOM, combines them into a Render Tree, calculates layout, and finally paints the pixels on the screen."
    }
  ],
  Backend: [
    {
      question: "What is Node.js and how does it differ from a browser?",
      answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine. Unlike the browser, it has no DOM or window object but has access to the filesystem, networking, and OS-level APIs."
    },
    {
      question: "What is Express.js?",
      answer: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, specifically for building APIs."
    },
    {
      question: "Explain the concept of Middleware in Express.",
      answer: "Middleware functions are functions that have access to the request, response, and the next middleware function in the application's request-response cycle. They can modify req/res, end the cycle, or call next()."
    },
    {
      question: "What is an API?",
      answer: "An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other."
    },
    {
      question: "Difference between REST and GraphQL.",
      answer: "REST uses standard HTTP methods and endpoints for resources. GraphQL uses a single endpoint and allows clients to request exactly the data they need, avoiding over-fetching and under-fetching."
    },
    {
      question: "What is a database? Explain SQL vs NoSQL.",
      answer: "A database is an organized collection of structured information. SQL (Relational) databases use tables and fixed schemas. NoSQL (Non-relational) databases use document, key-value, or graph structures with flexible schemas."
    },
    {
      question: "What is MongoDB and how does it store data?",
      answer: "MongoDB is a NoSQL document database. It stores data in flexible, JSON-like documents (BSON), which means fields can vary from document to document."
    },
    {
      question: "Explain the difference between an inner join and an outer join in SQL.",
      answer: "An Inner Join returns records that have matching values in both tables. An Outer Join (Left, Right, or Full) returns all records from one table and the matched records from the other."
    },
    {
      question: "What is an ORM (Object-Relational Mapping)?",
      answer: "ORM is a technique that lets you query and manipulate data from a database using an object-oriented paradigm instead of raw SQL."
    },
    {
      question: "What is Mongoose?",
      answer: "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model your application data."
    },
    {
      question: "How do you handle authentication in a backend app?",
      answer: "Common methods include session-based auth (using cookies) and token-based auth (using JWTs or OAuth)."
    },
    {
      question: "What is a JWT and how is it used for auth?",
      answer: "A JWT is a signed token containing user info. The client sends it in the header of subsequent requests, and the server verifies it without needing to query the database every time."
    },
    {
      question: "Explain hashing vs encryption.",
      answer: "Hashing is a one-way function used for data integrity (e.g., passwords). Encryption is a two-way function used for data confidentiality (e.g., messages) and requires a key to decrypt."
    },
    {
      question: "What is Bcrypt?",
      answer: "Bcrypt is a password-hashing function designed to be slow and secure, making it resistant to brute-force and rainbow table attacks."
    },
    {
      question: "What is an environment variable and why use it?",
      answer: "Environment variables are variables defined outside the code (e.g., in a .env file). They are used to store sensitive info like API keys and database URLs."
    },
    {
      question: "Explain the concept of a Microservice architecture.",
      answer: "In a microservice architecture, an application is built as a collection of small, independent services that communicate over a network."
    },
    {
      question: "What is Docker?",
      answer: "Docker is a platform for developing, shipping, and running applications in containers, which are lightweight, standalone packages containing everything needed to run the app."
    },
    {
      question: "What is Kubernetes?",
      answer: "Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications."
    },
    {
      question: "What is Redis and how is it used for caching?",
      answer: "Redis is an in-memory data structure store used as a database, cache, and message broker. It provides extremely fast data access by keeping data in RAM."
    },
    {
      question: "What is a Message Queue? (e.g., RabbitMQ, Kafka)",
      answer: "A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures."
    },
    {
      question: "Explain the difference between horizontal and vertical scaling.",
      answer: "Vertical scaling means adding more power (CPU, RAM) to an existing machine. Horizontal scaling means adding more machines to your network."
    },
    {
      question: "What is Load Balancing?",
      answer: "Load balancing is the process of distributing network traffic across multiple servers to ensure no single server becomes overwhelmed."
    },
    {
      question: "How do you handle file uploads in a backend app?",
      answer: "Commonly handled using middleware like 'multer' in Express, which saves files to a local directory or a cloud storage provider like AWS S3."
    },
    {
      question: "What is a reverse proxy?",
      answer: "A reverse proxy (like Nginx) sits in front of web servers and forwards client requests to the appropriate server, providing security, load balancing, and caching."
    },
    {
      question: "Explain the concept of 'Statelessness' in REST.",
      answer: "Statelessness means the server does not store any client context between requests. Each request from any client contains all the information necessary to service the request."
    },
    {
      question: "What are HTTP status codes? Give examples.",
      answer: "Status codes indicate the result of a request: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Internal Server Error)."
    },
    {
      question: "Difference between PUT and PATCH.",
      answer: "PUT is used to replace the entire resource. PATCH is used to apply partial modifications to a resource."
    },
    {
      question: "What is a CDN?",
      answer: "A Content Delivery Network (CDN) is a geographically distributed group of servers that work together to provide fast delivery of Internet content."
    },
    {
      question: "Explain Database Indexing.",
      answer: "Indexing is a data structure technique used to quickly locate and access data in a database table without scanning every row."
    },
    {
      question: "What is a Deadlock in databases?",
      answer: "A deadlock occurs when two or more transactions are each waiting for the other to release a lock, resulting in a situation where neither can proceed."
    },
    {
      question: "What is ACID in database transactions?",
      answer: "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties guarantee that database transactions are processed reliably."
    },
    {
      question: "How do you optimize a database query?",
      answer: "Optimization techniques include using indexes, avoiding SELECT *, minimizing joins, using query plans, and denormalizing data when necessary."
    },
    {
      question: "What is WebSockets?",
      answer: "WebSockets provide a persistent, full-duplex communication channel over a single TCP connection, allowing real-time data exchange."
    },
    {
      question: "Explain Socket.io.",
      answer: "Socket.io is a library that enables real-time, bi-directional communication between web clients and servers. It provides fallbacks if WebSockets aren't supported."
    },
    {
      question: "How do you handle concurrency in Node.js?",
      answer: "Node.js handles concurrency through its non-blocking event loop and asynchronous callbacks, promises, and async/await."
    },
    {
      question: "What is the 'cluster' module in Node.js?",
      answer: "The cluster module allows you to create child processes that all share the same server ports, enabling a single Node.js app to use multiple CPU cores."
    },
    {
      question: "What is a Stream in Node.js?",
      answer: "Streams are collections of data—just like arrays or strings. The difference is that streams might not be available all at once, and they don't have to fit in memory."
    },
    {
      question: "What is a Buffer in Node.js?",
      answer: "A Buffer is a region of memory used to temporarily store binary data while it is being moved from one place to another."
    },
    {
      question: "How do you perform error handling in an Express app?",
      answer: "Errors are handled using middleware functions with four arguments: (err, req, res, next). Centralizing error logic helps maintain a consistent response format."
    },
    {
      question: "What is Test-Driven Development (TDD)?",
      answer: "TDD is a development process where you write tests before writing the actual code. The cycle is: Red (Fail) -> Green (Pass) -> Refactor."
    },
    {
      question: "Explain the concept of 'Serverless' computing.",
      answer: "Serverless doesn't mean no servers; it means the cloud provider manages the server infrastructure, and developers only write the code (functions) that run in response to events."
    },
    {
      question: "What is an AWS Lambda function?",
      answer: "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. It scales automatically and you pay only for the compute time used."
    },
    {
      question: "How do you secure a REST API?",
      answer: "Security measures include HTTPS, authentication (JWT), authorization (RBAC), input validation, rate limiting, and protecting against OWASP vulnerabilities."
    },
    {
      question: "What is Rate Limiting?",
      answer: "Rate limiting is a technique to limit the number of requests a user or IP can make to an API within a certain timeframe to prevent abuse and DoS attacks."
    },
    {
      question: "Explain the concept of 'Dependency Injection'.",
      answer: "Dependency Injection is a design pattern where an object receives its dependencies from the outside instead of creating them internally, making code more testable and modular."
    },
    {
      question: "What is a Singleton pattern?",
      answer: "A Singleton is a design pattern that ensures a class has only one instance and provides a global point of access to it."
    },
    {
      question: "What is OAuth 2.0?",
      answer: "OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service, such as Google or GitHub."
    },
    {
      question: "How do you monitor a production backend server?",
      answer: "Monitoring tools include logging (ELK, Winston), APM (New Relic, Datadog), health checks, and metrics collection (Prometheus)."
    },
    {
      question: "What is CI/CD?",
      answer: "CI (Continuous Integration) is the practice of merging code changes frequently. CD (Continuous Deployment) is the practice of automatically deploying every change to production."
    },
    {
      question: "What is Git and how does it work?",
      answer: "Git is a distributed version control system that tracks changes in source code. It uses a local repository and remote servers (like GitHub) for collaboration."
    }
  ],
  AI: [
    {
      question: "What is Artificial Intelligence?",
      answer: "AI is a branch of computer science that aims to create systems capable of performing tasks that typically require human intelligence, such as reasoning, learning, and problem-solving."
    },
    {
      question: "Difference between AI, Machine Learning, and Deep Learning.",
      answer: "AI is the broad field. ML is a subset of AI that uses algorithms to learn from data. DL is a subset of ML based on artificial neural networks with many layers."
    },
    {
      question: "What is Supervised Learning?",
      answer: "Supervised learning is a type of machine learning where the model is trained on labeled data (input-output pairs)."
    },
    {
      question: "What is Unsupervised Learning?",
      answer: "Unsupervised learning involves training a model on unlabeled data, finding hidden patterns or structures (e.g., clustering)."
    },
    {
      question: "What is Reinforcement Learning?",
      answer: "Reinforcement learning is a type of learning where an agent learns to make decisions by performing actions in an environment to maximize a reward."
    },
    {
      question: "Explain the concept of Overfitting and Underfitting.",
      answer: "Overfitting occurs when a model learns the noise in the training data too well, failing to generalize to new data. Underfitting occurs when a model is too simple to learn the underlying patterns."
    },
    {
      question: "What is a Neural Network?",
      answer: "A neural network is a computing system inspired by the human brain, consisting of interconnected nodes (neurons) organized in layers."
    },
    {
      question: "What is an Activation Function?",
      answer: "An activation function (like ReLU or Sigmoid) determines the output of a neuron based on its input, introducing non-linearity into the network."
    },
    {
      question: "Explain Gradient Descent.",
      answer: "Gradient descent is an optimization algorithm used to minimize the loss function by iteratively moving in the direction of the steepest descent (negative gradient)."
    },
    {
      question: "What is Backpropagation?",
      answer: "Backpropagation is the algorithm used to calculate the gradient of the loss function with respect to the weights of the neural network by moving backwards from the output layer."
    },
    {
      question: "What is the difference between L1 and L2 regularization?",
      answer: "L1 (Lasso) adds the absolute value of weights to the loss, promoting sparsity. L2 (Ridge) adds the square of weights, preventing large weight values."
    },
    {
      question: "What is a Convolutional Neural Network (CNN)?",
      answer: "A CNN is a type of deep neural network specifically designed for processing structured grid data, such as images, using convolutional layers."
    },
    {
      question: "What is a Recurrent Neural Network (RNN)?",
      answer: "An RNN is a type of neural network designed for sequence data (like text or time series) by having connections that form a directed graph along a temporal sequence."
    },
    {
      question: "What is an LSTM?",
      answer: "LSTM (Long Short-Term Memory) is a special type of RNN capable of learning long-term dependencies by using gating mechanisms to control information flow."
    },
    {
      question: "Explain the concept of Transfer Learning.",
      answer: "Transfer learning involves taking a pre-trained model on a large dataset and fine-tuning it for a specific, related task with a smaller dataset."
    },
    {
      question: "What is Natural Language Processing (NLP)?",
      answer: "NLP is a field of AI that focuses on the interaction between computers and human language, including tasks like translation, sentiment analysis, and summarization."
    },
    {
      question: "What is a Transformer model?",
      answer: "A Transformer is a deep learning model that uses self-attention mechanisms to process entire sequences of data simultaneously, rather than sequentially like RNNs."
    },
    {
      question: "Explain the Attention Mechanism.",
      answer: "The attention mechanism allows a model to focus on specific parts of the input sequence when producing a certain part of the output sequence."
    },
    {
      question: "What is BERT?",
      answer: "BERT (Bidirectional Encoder Representations from Transformers) is a pre-trained NLP model that understands the context of words in both directions (left and right)."
    },
    {
      question: "What is GPT?",
      answer: "GPT (Generative Pre-trained Transformer) is a type of large language model designed to generate human-like text based on the context provided."
    },
    {
      question: "What is a Generative Adversarial Network (GAN)?",
      answer: "A GAN consists of two neural networks (Generator and Discriminator) that compete against each other to create realistic data, such as images."
    },
    {
      question: "What is computer vision?",
      answer: "Computer vision is a field of AI that enables computers to interpret and understand visual information from the world, such as images and videos."
    },
    {
      question: "Explain the Bias-Variance Tradeoff.",
      answer: "Bias is error due to overly simple assumptions. Variance is error due to sensitivity to small fluctuations in the training set. The goal is to find the sweet spot between them."
    },
    {
      question: "What is a Confusion Matrix?",
      answer: "A confusion matrix is a table used to evaluate the performance of a classification model, showing True Positives, True Negatives, False Positives, and False Negatives."
    },
    {
      question: "What are Precision and Recall?",
      answer: "Precision is the ratio of correctly predicted positive observations to the total predicted positives. Recall is the ratio of correctly predicted positive observations to all actual positives."
    },
    {
      question: "What is F1 Score?",
      answer: "The F1 score is the harmonic mean of precision and recall, providing a single metric that balances both."
    },
    {
      question: "What is ROC-AUC?",
      answer: "ROC is a probability curve and AUC represents the degree of separability between classes. It tells how much the model is capable of distinguishing between classes."
    },
    {
      question: "What is K-Nearest Neighbors (KNN)?",
      answer: "KNN is a simple supervised learning algorithm that classifies a data point based on the labels of its nearest neighbors in the feature space."
    },
    {
      question: "What is a Decision Tree?",
      answer: "A decision tree is a flowchart-like structure used for classification and regression, where internal nodes represent tests on attributes and leaves represent outcomes."
    },
    {
      question: "What is a Random Forest?",
      answer: "A random forest is an ensemble learning method that builds multiple decision trees and merges them together to get a more accurate and stable prediction."
    },
    {
      question: "What is Support Vector Machines (SVM)?",
      answer: "SVM is a supervised learning model that finds the hyperplane that best separates different classes in the feature space with the maximum margin."
    },
    {
      question: "Explain PCA (Principal Component Analysis).",
      answer: "PCA is a dimensionality reduction technique that transforms a large set of variables into a smaller one that still contains most of the information in the large set."
    },
    {
      question: "What is clustering?",
      answer: "Clustering is the task of grouping a set of objects in such a way that objects in the same group are more similar to each other than to those in other groups."
    },
    {
      question: "What is K-Means clustering?",
      answer: "K-Means is an unsupervised algorithm that partitions data into K distinct clusters based on their distance from the cluster centroids."
    },
    {
      question: "How do you handle missing data in a dataset?",
      answer: "Techniques include removing rows/columns, imputation (filling with mean/median/mode), or using algorithms that can handle missing values natively."
    },
    {
      question: "What is feature engineering?",
      answer: "Feature engineering is the process of using domain knowledge to create new features or modify existing ones to improve the performance of machine learning models."
    },
    {
      question: "What is data normalization vs standardization?",
      answer: "Normalization scales data to a range [0, 1]. Standardization scales data to have a mean of 0 and a standard deviation of 1."
    },
    {
      question: "Explain the concept of 'Cross-Validation'.",
      answer: "Cross-validation is a technique for evaluating a model's performance by splitting the data into multiple folds and training/testing the model on different combinations of these folds."
    },
    {
      question: "What is a Hyperparameter?",
      answer: "Hyperparameters are settings of an algorithm that are tuned before training (e.g., learning rate, number of layers) and are not learned from the data."
    },
    {
      question: "How do you tune hyperparameters?",
      answer: "Common methods include Grid Search (trying all combinations), Random Search (trying random combinations), and Bayesian Optimization."
    },
    {
      question: "What is TensorFlow?",
      answer: "TensorFlow is an open-source library developed by Google for numerical computation and large-scale machine learning."
    },
    {
      question: "What is PyTorch?",
      answer: "PyTorch is an open-source machine learning library based on the Torch library, used for applications such as computer vision and NLP, developed by Meta's AI Research lab."
    },
    {
      question: "Explain the concept of a 'Tensor'.",
      answer: "A tensor is a generalization of vectors and matrices to higher dimensions. It is the fundamental data structure used in deep learning libraries."
    },
    {
      question: "What is an Embedding?",
      answer: "An embedding is a representation of discrete variables (like words) as continuous-valued vectors in a lower-dimensional space, capturing semantic relationships."
    },
    {
      question: "What is Dimensionality Reduction?",
      answer: "Dimensionality reduction is the process of reducing the number of random variables under consideration, either by feature selection or feature extraction."
    },
    {
      question: "Explain the 'Cold Start' problem in recommendation systems.",
      answer: "The cold start problem occurs when a system doesn't have enough data about a new user or a new item to make accurate recommendations."
    },
    {
      question: "What is an Optimizer? (e.g., Adam, SGD)",
      answer: "An optimizer is an algorithm used to update the weights of a neural network to minimize the loss function. Adam and Stochastic Gradient Descent (SGD) are popular examples."
    },
    {
      question: "What is a Loss Function?",
      answer: "A loss function measures the difference between the model's prediction and the actual target value, providing a signal to the optimizer during training."
    },
    {
      question: "How do you deploy an AI model?",
      answer: "Models are typically deployed as APIs using frameworks like Flask or FastAPI, or as microservices using Docker and Kubernetes."
    },
    {
      question: "What is MLOps?",
      answer: "MLOps (Machine Learning Operations) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently."
    }
  ],
  DevOps: [
    { question: "What is DevOps?", answer: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide high-quality continuous delivery." },
    { question: "What are the benefits of DevOps?", answer: "Benefits include faster time to market, improved collaboration, increased efficiency, better quality through automation, and higher reliability." },
    { question: "Explain the CI/CD pipeline.", answer: "CI (Continuous Integration) automates code merging. CD (Continuous Delivery/Deployment) automates the release process to staging or production." },
    { question: "What is Infrastructure as Code (IaC)?", answer: "IaC is the managing and provisioning of infrastructure through code instead of manual processes, using tools like Terraform or CloudFormation." },
    { question: "What is Terraform?", answer: "Terraform is an open-source IaC tool that allows you to define and provide data center infrastructure using a declarative configuration language (HCL)." },
    { question: "What is Ansible?", answer: "Ansible is an open-source IT automation engine that automates configuration management, cloud provisioning, and application deployment." }
  ],
  "Data Science": [
    { question: "What is Data Science?", answer: "Data science is a multi-disciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data." },
    { question: "Explain the Data Science lifecycle.", answer: "The lifecycle typically includes business understanding, data acquisition, data cleaning, exploration, modeling, evaluation, and deployment." }
  ],
  "Full Stack": [
    { question: "What is a Full Stack developer?", answer: "A Full Stack developer is someone who can work on both the front-end (client-side) and back-end (server-side) of an application." },
    { question: "What is the MERN stack?", answer: "MERN stands for MongoDB, Express.js, React, and Node.js. It's a popular JavaScript stack for building full-stack web applications." }
  ],
  "Cyber Security": [
    { question: "What is Cyber Security?", answer: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks aimed at accessing, changing, or destroying sensitive information." },
    { question: "Explain the CIA triad.", answer: "CIA stands for Confidentiality (keeping data secret), Integrity (keeping data accurate), and Availability (keeping data accessible)." }
  ]
};
