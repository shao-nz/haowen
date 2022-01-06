import aws from 'aws-sdk';

export default async function handler(req, res) {
  aws.config.update({
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    region: process.env.BUCKET_REGION,
    signatureVersion: 'v4',
  });
  const s3 = new aws.S3();
  const post = await s3.createPresignedPost({
    Bucket: process.env.BUCKET_NAME,
    Fields: {
      key: req.query.file,
    },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 20971520], // up to 20 MB
    ],
  });

  res.status(200).json(post);
}