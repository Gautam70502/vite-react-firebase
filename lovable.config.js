
module.exports = {
  projectType: 'monorepo',
  entryPoint: 'frontend/src/main.tsx',
  devCommand: 'cd frontend && npm run dev',
  buildCommand: 'cd frontend && npm run build',
  outputPath: 'dist'
};
