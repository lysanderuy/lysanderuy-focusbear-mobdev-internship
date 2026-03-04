const React = require('react');
const httpClient = require('../../api/httpClient');

function ApiDataWidget() {
  const [loading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const response = await httpClient.get('/todos/1');
        const data = response.data;
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
