import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  useTheme,
  Button
} from '@mui/material';

const DocumentList = () => {
  const theme = useTheme();
  const documents = [
    { name: 'Annual Report 2023.pdf', date: '2 mins ago', status: 'Completed', size: '2.4 MB' },
    { name: 'Project Proposal.docx', date: '15 mins ago', status: 'Processing', size: '1.8 MB' },
    { name: 'Meeting Minutes.txt', date: '1 hour ago', status: 'Completed', size: '156 KB' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Document Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {documents.map((doc, index) => (
            <TableRow key={index}>
              <TableCell>{doc.name}</TableCell>
              <TableCell>{doc.date}</TableCell>
              <TableCell>
                <Chip 
                  label={doc.status}
                  sx={{
                    backgroundColor: doc.status === 'Completed' 
                      ? theme.palette.success.light 
                      : theme.palette.warning.light,
                    color: doc.status === 'Completed'
                      ? theme.palette.success.dark
                      : theme.palette.warning.dark
                  }}
                />
              </TableCell>
              <TableCell>
                <Button 
                  variant="text" 
                  color="primary"
                  disabled={doc.status !== 'Completed'}
                >
                  View Summary
                </Button>
              </TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DocumentList;