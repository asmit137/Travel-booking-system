const Package = require('../models/Package');


exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
};


exports.getPackageById = async (req, res) => {
  try {
    const pkg = await Package.findById(req.params.id);
    if (!pkg) {
      return res.status(404).json({ error: 'Package not found' });
    }
    res.json(pkg);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch the package' });
  }
};

exports.addPackage = async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create package' });
  }
};


exports.updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPackage = await Package.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedPackage) {
      return res.status(404).json({ error: 'Package not found' });
    }

    res.json(updatedPackage);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update package' });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const pkg = await Package.findByIdAndDelete(req.params.id);
    if (!pkg) {
      return res.status(404).json({ error: 'Package not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete package' });
  }
};
