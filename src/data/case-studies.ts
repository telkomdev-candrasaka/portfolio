import type { CaseStudy } from "../types/case-study";

export const caseStudies = [
  {
    slug: "session-reporting-pipeline",
    title: "Session Reporting Pipeline",
    summary:
      "An asynchronous reporting pipeline for generating operational reports without blocking user-facing API requests.",
    problem:
      "Report generation required querying and processing large session datasets. Running that work inside normal API requests created timeout risk, database pressure, and a poor user experience for long-running exports.",
    architecture: {
      overview:
        "The API creates a report job, persists report metadata, publishes a message to RabbitMQ, and returns a job identifier. Worker services consume queued jobs, query the required data, generate export files, upload them to object storage, and update the report status for retrieval.",
      components: [
        "REST API service",
        "PostgreSQL reporting tables",
        "RabbitMQ job queue",
        "Background report workers",
        "Redis job status cache",
        "S3-compatible object storage",
      ],
      flow: [
        "Client requests a report from the API.",
        "API validates parameters and stores a pending report record.",
        "API publishes a report generation job to RabbitMQ.",
        "Worker consumes the job and executes optimized reporting queries.",
        "Worker generates the export and uploads it to object storage.",
        "API exposes status and download metadata to the client.",
      ],
    },
    challenges: [
      "Preventing long-running reports from blocking API request threads.",
      "Designing clear job states for pending, processing, completed, and failed reports.",
      "Keeping report queries efficient enough for high-volume session data.",
      "Handling retries without generating duplicate exports or inconsistent metadata.",
    ],
    tradeoffs: [
      {
        decision: "Use queue-based report generation",
        benefit:
          "API requests stay fast while workers can scale independently for heavy processing.",
        cost: "Adds operational complexity around queues, workers, retries, and job monitoring.",
      },
      {
        decision: "Store generated reports in object storage",
        benefit:
          "Large export files are durable and do not increase database storage pressure.",
        cost: "Requires synchronization between report metadata and stored object keys.",
      },
    ],
    lessonsLearned: [
      "Long-running reporting work should be modeled as a workflow, not a single request.",
      "Job status design is part of the user experience.",
      "Retry behavior must be planned before failures happen in production.",
      "Reporting pipelines need database access patterns defined early.",
    ],
    technologies: [
      "Node.js",
      "PostgreSQL",
      "RabbitMQ",
      "Redis",
      "REST API",
      "S3-compatible Object Storage",
    ],
    featured: true,
  },
  {
    slug: "whatsapp-media-service",
    title: "WhatsApp Media Service",
    summary:
      "A backend media service for handling uploads, metadata, storage, and retrieval of WhatsApp-related media assets.",
    problem:
      "Media files needed durable storage, searchable metadata, and reliable retrieval paths. Storing binary files directly in application data stores would make the system harder to scale and maintain.",
    architecture: {
      overview:
        "The service separates binary object storage from application metadata. The API validates media requests, stores files in S3-compatible storage, persists metadata in the database, and optionally publishes background jobs for downstream media processing.",
      components: [
        "Media upload API",
        "Media metadata database",
        "S3-compatible object storage",
        "Background processing workers",
        "Message workflow integration",
      ],
      flow: [
        "Client submits media upload request.",
        "API validates file type, size, and related message context.",
        "File is uploaded to object storage.",
        "Metadata record is persisted with storage key and ownership context.",
        "Optional background job is published for additional processing.",
        "Retrieval endpoints resolve metadata and storage access rules.",
      ],
    },
    challenges: [
      "Keeping metadata and object storage writes consistent.",
      "Designing upload flows that remain reliable under larger media payloads.",
      "Separating media lifecycle concerns from message workflow logic.",
      "Handling failed uploads and partial persistence safely.",
    ],
    tradeoffs: [
      {
        decision: "Separate object storage from metadata storage",
        benefit:
          "Binary files are stored in infrastructure designed for durable object access while metadata remains queryable.",
        cost: "Requires cleanup and reconciliation logic for partial failures.",
      },
      {
        decision: "Use background jobs for optional media processing",
        benefit:
          "Slow processing steps do not block upload completion or message workflows.",
        cost: "Introduces eventual consistency for derived media states.",
      },
    ],
    lessonsLearned: [
      "Media systems need explicit lifecycle design.",
      "Object keys, metadata records, and access rules should be designed together.",
      "Partial failure handling is critical when a workflow touches storage and a database.",
      "Background processing keeps upload APIs responsive.",
    ],
    technologies: [
      "Node.js",
      "MongoDB",
      "RabbitMQ",
      "REST API",
      "S3-compatible Object Storage",
    ],
    featured: true,
  },
  {
    slug: "event-driven-processing",
    title: "Event Driven Processing",
    summary:
      "A queue-based backend workflow for decoupling slow, failure-prone, or high-cost work from synchronous API execution.",
    problem:
      "Some backend operations were too slow or unreliable to run directly inside API requests. The system needed a way to process work asynchronously while preserving visibility, retry behavior, and operational control.",
    architecture: {
      overview:
        "The API publishes domain events or job messages to RabbitMQ. Worker services consume messages, execute processing logic, update state, and route failures through retry or dead-letter handling depending on the failure type.",
      components: [
        "REST API publisher",
        "RabbitMQ exchange",
        "Processing queues",
        "Worker services",
        "Retry strategy",
        "Dead-letter queue",
        "Operational logs",
      ],
      flow: [
        "API receives a request and validates the workflow trigger.",
        "API persists required state before publishing a message.",
        "Message is routed to the correct queue.",
        "Worker consumes and processes the message.",
        "Successful processing updates domain state.",
        "Failed processing is retried or routed to a dead-letter queue.",
      ],
    },
    challenges: [
      "Choosing which work belongs in the request path and which work belongs in queues.",
      "Designing idempotent workers for retried messages.",
      "Preventing silent failures in background processing.",
      "Making asynchronous state visible to users and operators.",
    ],
    tradeoffs: [
      {
        decision: "Decouple slow work using RabbitMQ",
        benefit:
          "Improves API responsiveness and allows background processing capacity to scale independently.",
        cost: "Requires message contracts, retry policies, and monitoring.",
      },
      {
        decision: "Design workers to be idempotent",
        benefit:
          "Retries become safer because repeated message delivery does not corrupt state.",
        cost: "Requires additional checks, unique constraints, or processing state records.",
      },
    ],
    lessonsLearned: [
      "A queue is not just infrastructure; it changes the application workflow model.",
      "Retries are only safe when processing is idempotent or carefully guarded.",
      "Dead-letter queues need an operational review path.",
      "Async workflows need status visibility, not just logs.",
    ],
    technologies: [
      "Node.js",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "REST API",
    ],
    featured: true,
  },
  {
    slug: "high-volume-data-processing",
    title: "High Volume Data Processing",
    summary:
      "A backend data processing approach for handling large operational datasets, reporting workloads, and performance-sensitive workflows.",
    problem:
      "High-volume datasets created pressure on API response times, database queries, and reporting workflows. The system needed predictable processing patterns that could scale without degrading production behavior.",
    architecture: {
      overview:
        "Processing is organized around explicit data access patterns, optimized queries, batch-oriented jobs, cache-assisted status reads, and background workers for expensive operations. The architecture separates ingestion, transformation, storage, and reporting concerns.",
      components: [
        "Data ingestion endpoints",
        "PostgreSQL operational data",
        "MongoDB document data",
        "Batch processing workers",
        "Redis cache",
        "Reporting API",
      ],
      flow: [
        "Application stores operational data through normal backend workflows.",
        "Processing jobs select data in bounded batches.",
        "Workers transform or aggregate data for reporting needs.",
        "Frequently accessed status or summary data is cached.",
        "Reporting endpoints read from optimized tables or preprocessed outputs.",
      ],
    },
    challenges: [
      "Avoiding unbounded queries over large datasets.",
      "Balancing fresh data with preprocessed reporting outputs.",
      "Designing indexes around real filtering and sorting behavior.",
      "Keeping batch jobs observable and recoverable.",
    ],
    tradeoffs: [
      {
        decision: "Process large work in bounded batches",
        benefit:
          "Reduces memory pressure and keeps long-running jobs easier to recover.",
        cost: "Requires checkpointing, pagination strategy, and careful progress tracking.",
      },
      {
        decision: "Use preprocessed outputs for reporting",
        benefit:
          "Improves read performance for expensive reporting views.",
        cost: "Introduces data freshness tradeoffs and additional storage.",
      },
    ],
    lessonsLearned: [
      "High-volume processing depends on access patterns more than raw database choice.",
      "Batch boundaries and checkpoints make large jobs safer to operate.",
      "Reporting workloads should not compete directly with user-facing traffic.",
      "Indexes should be designed from actual query behavior.",
    ],
    technologies: [
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "REST API",
    ],
    featured: true,
  },
] satisfies readonly CaseStudy[];

export const featuredCaseStudies = caseStudies.filter(
  (caseStudy) => caseStudy.featured
);
