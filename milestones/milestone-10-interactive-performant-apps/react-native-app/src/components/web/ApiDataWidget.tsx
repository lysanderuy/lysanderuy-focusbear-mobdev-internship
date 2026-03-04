const React = require('react');

function ApiDataWidget() {
  const [loading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (isMounted) {
          setTitle(data.title);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unexpected error');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return React.createElement('p', null, 'Loading...');
  }

  if (error) {
    return React.createElement('p', { role: 'alert' }, error);
  }

  return React.createElement(
    'section',
    null,
    React.createElement('h2', null, 'API Data'),
    React.createElement('p', null, title)
  );
}

module.exports = ApiDataWidget;
