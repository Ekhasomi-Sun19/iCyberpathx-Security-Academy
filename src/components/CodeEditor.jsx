import { useState } from "react";
import "../styles/CodeEditor.css";

function CodeEditor() {
  const [activeTab, setActiveTab] = useState("server");
  const [copied, setCopied] = useState(false);

  const codeExamples = {
    server: {
      title: "Create an HTTP Server",
      code: `// server.js
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with \`node server.js\``,
    },
    tests: {
      title: "Write Tests",
      code: `// test.js
import assert from 'node:assert';
import { test } from 'node:test';

test('synchronous passing test', (t) => {
  assert.strictEqual(1, 1);
});

test('asynchronous passing test', async (t) => {
  assert.strictEqual(1, 1);
});`,
    },
    hash: {
      title: "Read and Hash a File",
      code: `// hash.js
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const hash = createHash('sha256');
const input = createReadStream('example.txt');

input.on('readable', () => {
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(\`\${hash.digest('hex')} example.txt\`);
  }
});`,
    },
    pipeline: {
      title: "Streams Pipeline",
      code: `// pipeline.js
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

pipeline(
  createReadStream('input.txt'),
  createGzip(),
  createWriteStream('output.txt.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
);`,
    },
    threads: {
      title: "Work with Threads",
      code: `// worker.js
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(__filename, {
    workerData: { num: 5 }
  });
  worker.on('message', (data) => {
    console.log('Received:', data);
  });
} else {
  const { num } = workerData;
  parentPort.postMessage(num * 2);
}`,
    },
  };

  const tabs = [
    { id: "server", label: "Create an HTTP Server" },
    { id: "tests", label: "Write Tests" },
    { id: "hash", label: "Read and Hash a File" },
    { id: "pipeline", label: "Streams Pipeline" },
    { id: "threads", label: "Work with Threads" },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeTab].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="code-editor-section">
      <div className="code-container">
        <div className="code-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="code-content">
          <div className="code-header">
            <span className="language-label">Cheat Sheet</span>
            <button className="copy-button" onClick={handleCopy}>
              {copied ? (
                <>
                  <span className="copy-icon">✓</span>
                  Copied!
                </>
              ) : (
                <>
                  <span className="copy-icon">📋</span>
                  Copy to clipboard
                </>
              )}
            </button>
          </div>

          <div className="code-block">
            <pre>
              <code className="javascript">{codeExamples[activeTab].code}</code>
            </pre>
          </div>
        </div>

        <div className="code-footer">
          <p>
            Learn more what iCyberpathX is able to offer with our{" "}
            <a href="#learning-materials" className="learning-link">
              Learning materials
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default CodeEditor;
