const React = require('react');
const { Text, View } = require('react-native');
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
    return React.createElement(Text, null, 'Loading...');
  }

  if (error) {
    return React.createElement(Text, { accessibilityRole: 'alert' }, error);
  }

  return React.createElement(
    View,
    null,
    React.createElement(Text, { accessibilityRole: 'header' }, 'API Data'),
    React.createElement(Text, null, title)
  );
}

module.exports = ApiDataWidget;
