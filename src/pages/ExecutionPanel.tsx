import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  Panel,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';

const nodeColor = (node) => {
  switch (node.run) {
    case 'pass':
      return '#6ede87';
    case 'fail':
      return '#ff0072';
    default:
      return '#6865A5';
  }
};

const initialNodes = [
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '1', run: 'none', position: { x: 100, y: 100 }, data: { label: <div className='Nodetitle'> data_extractor_1 (mWater API)</div> }, type: 'input' },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '2', run: 'none', position: { x: 300, y: 100 }, data: { label: <div className='Nodetitle'> data_extractor_2 (mWater dB)</div> }, type: 'input' },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '3', run: 'none', position: { x: 500, y: 100 }, data: { label: <div className='Nodetitle'> data_extractor_3 (GSheet)</div> },type: 'input' },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '4', run: 'none', position: { x: 100, y: 200 }, data: { label: <div className='Nodetitle'> data_validator_1</div> } },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '5', run: 'none', position: { x: 300, y: 200 }, data: { label: <div className='Nodetitle'> data_validator_2</div> } },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '6', run: 'none', position: { x: 500, y: 200 }, data: { label: <div className='Nodetitle'> data_validator_3</div> } },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '7', run: 'none', position: { x: 300, y: 300 }, data: { label: <div className='Nodetitle'> data_consolidation</div> } },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '8', run: 'none', position: { x: 300, y: 400 }, data: { label: <div className='Nodetitle'> data_transformation</div>} },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '9', run: 'none', position: { x: 500, y: 500 }, data: { label: <div className='Nodetitle'> custom_calculations</div> } },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '10', run: 'none', position: { x: 700, y: 600 }, data: { label:<div className='Nodetitle'> 'data_validation (final)</div> } },
  { style: { backgroundColor: '#6865A5', color: 'white' }, id: '11', run: 'none', position: { x: 700, y: 700 }, data: { label:<div className='Nodetitle'> 'dashboard_ingestion</div> }, type: 'output' },
];
const initialEdges = [
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e2-5', source: '2', target: '5', animated: true },
  { id: 'e3-6', source: '3', target: '6', animated: true },
  { id: 'e4-7', source: '4', target: '7', animated: true },
  { id: 'e5-7', source: '5', target: '7', animated: true },
  { id: 'e6-7', source: '6', target: '7', animated: true },
  { id: 'e7-8', source: '7', target: '8', animated: true },
  { id: 'e8-9', source: '8', target: '9', animated: true },
  { id: 'e9-10', source: '9', target: '10', animated: true },
  { id: 'e10-11', source: '10', target: '11', animated: true },
];

const ExecutionPanel: React.FC = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  
  const [logs, setLogs] = useState([
    { dataset:"Dataset A", block: 'data_validator_3', error: 'TypeError: Datatype is mismatching' },
  ]);

  const onExecute = () => {
    localStorage.setItem('logs', JSON.stringify(logs));
    setNodes((nds) =>
      nds.map((node) => {
        if (['1', '2', '3', '4', '5'].includes(node.id)) {
          return {
            ...node,
            run: 'pass',
            style: { ...node.style, backgroundColor: '#6ede87' },
          };
        }
        if (node.id === '6') {
          return {
            ...node,
            run: 'fail',
            style: { ...node.style, backgroundColor: '#ff0072' },
          };
        }
        return node;
      })
    );
  };
  return (
    <>
      <div style={{ width: '100%', height: '90vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Controls />
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable/>
        <Background variant='dots' gap={12} size={1} />
        <Panel  style={{ cursor: 'pointer' }} onClick={onExecute} className="ExeButton" position="top-right">Execute</Panel>
      </ReactFlow>
      </div>
    </>
  );
};

export default ExecutionPanel;
