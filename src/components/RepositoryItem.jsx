export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.link}>acessar repositorio</a>
    </li>
  );
}
