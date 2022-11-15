import { View, Text } from 'react-native';
import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

export default function FormulaDialog({
  isOpen,
  handleOpen,
  handleClose,
  handleChange,
}) {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Add mathmatical formula</DialogTitle>

      <DialogContent>
        <TextField />
      </DialogContent>

      <DialogActions>
        <Button>Cancel</Button>
        <Button onPress={handleClose}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
