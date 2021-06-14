import Head from 'next/head';
import Link from 'next/link';
import { FiTrash, FiCheckSquare } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';

import styles from './home.module.scss';

interface Text {
  id: number;
  title: string;
  isComplete: boolean;
}

export default function Dashboard() {
  const [texts, setTexts] = useState<Text[]>([]);
  const [newTextTitle, setNewTextTitle] = useState('');

  function handleCreateNewText() {
    if (!newTextTitle) return;

    const newText = {
      id: Math.random(),
      title: newTextTitle,
      isComplete: false,
    };

    setTexts((oldState) => [...oldState, newText]);
    setNewTextTitle('');
  }

  function handleRemoveText(id: number) {
    const filteredTexts = texts.filter((text) => text.id !== id);

    setTexts(filteredTexts);
  }

  return (
    <>
      <Head>
        <title>Biblioteca dos sonhos | Dashboard</title>
      </Head>

      <Link href="/">
        <a>
          <AiOutlineArrowLeft size={25} color="#000" />
        </a>
      </Link>

      <section className={styles.TextList}>
        <header>
          <h2>Por favor faça upload do seu texto</h2>

          <div className={styles.inputGroup}>
            <input
              type="file"
              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              placeholder="Adicionar novo Texto"
              onChange={(e) => setNewTextTitle(e.target.value)}
              value={newTextTitle}
            />
            <button
              type="submit"
              data-testid="add-task-button"
              onClick={handleCreateNewText}
            >
              <FiCheckSquare size={16} color="#fff" />
            </button>
          </div>
        </header>

        <main>
          <ul>
            {texts.map((text) => (
              <li>
                <div data-testid="text">
                  <p>{text.title}</p>
                </div>

                <button
                  type="button"
                  data-testid="remove-task-button"
                  onClick={() => handleRemoveText(text.id)}
                >
                  <FiTrash size={16} />
                </button>
              </li>
            ))}
          </ul>
        </main>
      </section>
    </>
  );
}
