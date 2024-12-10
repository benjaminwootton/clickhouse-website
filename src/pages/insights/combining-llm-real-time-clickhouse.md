---
title: Combining Large Language Models With Real Time Data
date_published: 2024-01-09T00:15:46.000Z
date_updated: 2024-01-09T00:15:46.000Z
order: 116
image: /x.jpg
featured_image: ./images/8.jpg
background_color: 
    - "#DF6B9C"
    - "#E74C68"
tag: General
featured_posts: 33,34,35,36

authorName1: Benjamin Wootton
authorTitle1: Founder & CTO, Ensemble
authorImage1: /assets/authors/benjamin-wootton.jpg
authorLinkedIn1: https://www.linkedin.com/in/benjaminwootton/
--- 

import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import InformationEmbed from '../../src/components/mdx/InformationEmbed'

In this video we explain how large language models can be used to interrogate a real time analytical database, in this case ClickHouse Cloud.

We also explain how demonstrate how generative AI can be used to make an employee more efficient and effective.

<Html>
<div class="hex-embed">
<iframe width="100%" src="https://www.youtube.com/embed/7G-VwZ_fC5M?si=Uf8eY_3KEK-TnAY1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</Html>

### Video Transcript

<InformationEmbed title="The following transcript was automatically generated"></InformationEmbed>

Hi there. In this demo, I wanted to walk through integrating a large language model with a real-time analytical database, in this case, Clickhouse Cloud.

We are going to demonstrate a scenario where we have data which is being captured in real-time about transactions and that is being streamed into our database. Then, we are going to ask questions using a large language model chat interface to understand the state of the world. We're also going to show how we can use Generative AI to make employees and the business overall more efficient.

To illustrate this, we are going to use a financial crime scenario. Imagine a business with an analyst responsible for monitoring inbound and outbound payments in real-time. We need to ask questions about the transactions and their customers in plain English to understand the risk and determine if we need to block a transaction.

Additionally, I would like to explain how Generative AI could potentially support their work and enhance efficiency and effectiveness. My aim is to demonstrate the significant business impact when combining a modern data stack based on real-time streaming data with LLMs.

In terms of technology for this demo, we're using Clickhouse Cloud as the core. It's a fully managed, cloud-hosted database well-suited for this type of workload. We'll employ ChatGPT and AWS Bedrock for natural language processing and the Generative AI components. We'll also use a library called LlamaIndex, a framework for connecting LLMs with data sources, in our case, Clickhouse Cloud.

The GUI and user interface are built using Ensemble JS, which helps build interactive real-time applications. There's also a middleware called Cube that connects the front end with Clickhouse Cloud.

In the demo, we are looking at an application built for our financial crime analyst. About 100 transactions have taken place so far, with nine blocked due to fraud indicators. Refreshing the data shows an increase in transactions and total value, demonstrating the real-time concept.

To further demonstrate, our most popular beneficial countries are the US, the UK, and Russia, with 20 to 30 transactions each. This dashboard is connected to Clickhouse, providing a real-time view of the data as it's ingested.

The main part of our demo is to showcase the large language model and what we call RAG, or retrieval-augmented generation. We start by asking simple questions about the dataset in plain English, which are then processed by interrogating Clickhouse. This helps us understand transaction details, such as the highest value transaction sent to Russia and validate these responses against real-time data.

We also explore scenarios like a sudden uptick in transactions to Israel and use the LLM to query relevant data. This demonstrates the model's ability to handle real-time data, including new events and transactions.

In the financial crime aspect, we check transactions sent to sanctioned individuals. We query the number of such transactions and delve deeper into specific cases, like the largest transaction by a sanctioned individual. This part of the demo highlights the use of Generative AI to assist in financial crime analysis.

Finally, we use Generative AI to support the agent's work, such as drafting letters to individuals involved in high-value transactions. This demonstrates how Generative AI can streamline business processes and enhance efficiency.

In summary, this technology stack and model provide real-time insights, which is crucial for systems like fraud detection. The use of machine learning and AI enables efficient detection and response to situations of interest, helping employees be more efficient and effective in roles like financial crime analysis. This approach not only saves costs but also improves regulatory compliance.

I hope this demonstration has illustrated the potential of combining modern real-time streaming analytics with LLMs, particularly in the financial crime domain. This technique can be applied across various industries, and we're keen to explore similar systems in different business scenarios. If you're interested in achieving similar outcomes in your business, please reach out to us at the intersection of real-time advanced analytics and AI. Thanks.