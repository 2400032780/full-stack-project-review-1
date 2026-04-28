import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const issues = [];

walk('./src', (filePath) => {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const problems = [];

  if (/import \* from ["']/.test(content)) problems.push('broken star import');
  if (/\.ComponentProps/.test(content)) problems.push('ComponentProps');
  if (/\binterface\b/.test(content)) problems.push('interface');
  if (/\b as boolean\b|\b as any\b|\b as string\b|\b as number\b/.test(content)) problems.push('as assertion');
  if (/variants\)\s*\{/.test(content)) problems.push('broken cva');
  if (/ReactNode/.test(content)) problems.push('ReactNode');
  if (/e\.[A-Z][a-zA-Z]+Event/.test(content)) problems.push('event type');
  if (/headers\),/.test(content) || /headers\)\s*\}/.test(content)) problems.push('broken headers');

  if (problems.length > 0) {
    issues.push({ file: filePath, problems });
  }
});

const output = issues.map(({file, problems}) => `${file}\n${problems.map(p=>'  - '+p).join('\n')}`).join('\n');
fs.writeFileSync('./scan-result.txt', output || 'No issues!');
console.log(output || 'No issues found!');
