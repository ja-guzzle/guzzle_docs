/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  sideBar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['introduction/What is Guzzle', 'introduction/Deploying Guzzle on Microsoft Azure']
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: ['Tutorial/Overview','Tutorial/ingest_local_file_to_mysql']
    },
    {
      type: 'category',
      label: 'How to guides',
      items: [ 
      {
        'Administration': [
              'How to guides/Administration/Environment config/Repository database',
              'How to guides/Administration/Environment config/Setup Shared Storage',
              'How to guides/Administration/Environment config/Timeout and Sync',
              'How to guides/Administration/Maintenance/JWT',
              'How to guides/Administration/Maintenance/Schedule',
              'How to guides/Administration/Maintenance/View service log',
              'How to guides/Administration/Security/Azure Single Sign On',
              'How to guides/Administration/Security/User management'
        ]
      },
      {
        'Author': [
          'How to guides/Author/Author',
          'How to guides/Author/External',
          'How to guides/Author/Git Integration and Version Control',
          'How to guides/Author/Schedule',
          'How to guides/Author/Copy Data Tool'
        ]
      },
      {
        'Computes': [
          'How to guides/Computes/Azure Databricks',
          'How to guides/Computes/Local Spark',
          'How to guides/Computes/Yarn'
        ]
      },
      {
        'Datastores': [
          'How to guides/Datastores/Amazon S3',
          'How to guides/Datastores/Azure Data Factory',
          'How to guides/Datastores/Azure Data Lake Storage Gen2',
          'How to guides/Datastores/Azure SQL',
          'How to guides/Datastores/Databricks File System',
          'How to guides/Datastores/Datastore overview',
          'How to guides/Datastores/Delta Lake',
          'How to guides/Datastores/HDFS',
          'How to guides/Datastores/Hive',
          'How to guides/Datastores/Server file system',
          'How to guides/Datastores/Rest',
          'How to guides/Datastores/JDBC',
          'How to guides/Datastores/Azure Synapse Analytics'
        ]
      },
      {
        'Governance': [
          'How to guides/Governance/Consraint Checks',
          'How to guides/Governance/Housekeeping Hive and Delta tables',
          'How to guides/Governance/Reconcilation of data accross two tables'
        ]
      },
      {
        Pipelines: [
          'How to guides/Ingest data/Pipeline',
        ]
      },
      {
        Batches: ['How to guides/Batch/Batch']
      },
      {
        Housekeeping: ['How to guides/Ingest data/Housekeeping']
      },
      {
        Parameter: ['How to guides/Parameters/Parameters',]
      },
      {
        'Ingest data': [
          'How to guides/Ingest data/Working with Delimited Files',
          'How to guides/Ingest data/Working with JSON Files',
          'How to guides/Ingest data/Working with XML files',
          'How to guides/Ingest data/Working with Text and Log Files',
          'How to guides/Ingest data/Working with Excel',
          'How to guides/Ingest data/Working with Fixed Length Files',
          'How to guides/Ingest data/Working with Big Data',
          'How to guides/Ingest data/Working with Multiple files',
          'How to guides/Ingest data/Working with Hive and Delta',
          'How to guides/Ingest data/Working with Databases- JDBC',
          'How to guides/Ingest data/Working with Databases- Azure SQL',
          'How to guides/Ingest data/Working with Databases- Azure Synapse Analytics',
          'How to guides/Ingest data/Working with Databases- HIVE',
          'How to guides/Ingest data/Working with Rest',
          'How to guides/Ingest data/Column Restrictions - Exclude and Include Columns',
          'How to guides/Ingest data/Configure Control File',
          'How to guides/Ingest data/Moving Processed Files',
          'How to guides/Ingest data/Processing',
          'How to guides/Ingest data/Watermark',
          'How to guides/Ingest data/Pre-SQL and Post-SQL for Source and Target in Ingestion',
          'How to guides/Ingest data/Ingest Data from Local file system to MySQL Database'
        ]
      },
      {
        'Monitor': [
          'How to guides/Monitor/Monitor'
        ]
      }]
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['Resources/Overview','Resources/resource'],
    },
    'changelog'
  ]
};
