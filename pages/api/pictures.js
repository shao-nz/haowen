import mongodb from '../../lib/mongodb';
import Picture from '../../lib/Picture';

const basePath = '../../public/images/';
// async function insertPicture(fileName) {
//   await mongodb();
//   var picture = new Picture({
//     fileName: fileName,
//     filePath: basePath + fileName
//   });

//   await picture.save((err, data) => {
//     if (err) return console.log(err)
//     console.log(data.fileName)
//   });
// }

// async function findByName(name) {
//   await mongodb();

//   await Picture.findOne({fileName: name}, (err, picture) => {
//     if (err) return console.log(err)
//     console.log(picture.filePath)
//     })
// }

export default async (req, res) => {
  const {method} = req;

  await mongodb();

  switch (method) {
    case 'GET':
      try {
        console.log(req.body);
        const pictures = await Picture.find({});
        res.status(200).json({success: true, data: pictures});
        } catch (err) {
            res.status(400).json({success: false});
        }
      break;
    case 'POST':
      try {
        console.log(req.body);
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
        console.log(req.body);
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