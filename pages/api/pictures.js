import mongodb from '../../lib/mongodb';
import Picture from '../../lib/Picture';

// const basePath = '../../public/images/';
const basePath = 'https://s3.ap-southeast-2.amazonaws.com/hao.works/'

const handler = async (req, res) => {
  const {method} = req;

  await mongodb();

  switch (method) {
    case 'GET':
      try {
        const pictures = await Picture.find({});
        res.status(200).json({success: true, data: pictures});
        } catch (err) {
            res.status(400).json({success: false});
        }
      break;
    case 'POST':
      try {
        const picture = await Picture({
          fileName: req.body.fileName,
          filePath: basePath + req.body.fileName
        });
        picture.save();
        res.status(201).json({success: true, data: picture});
      } catch (err) {
        res.status(400).json({success: false});
      }
      break;
    case 'DELETE':
      try {
        await Picture.findByIdAndDelete(req.body.id);
        res.status(201).json({success: true});
      } catch (err) {
        res.status(400).json({success: false});
      }
      break;
    default:
      res.status(400).json({success: false});
      break;
  }
}

export default handler;