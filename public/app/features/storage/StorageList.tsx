import { css } from '@emotion/css';
import { GrafanaTheme2 } from '@grafana/data';
import { Badge, Card, Icon, IconName, useStyles2 } from '@grafana/ui';
import { uniqueId } from 'lodash';
import React from 'react';
import { RootStorageMeta } from './types';

interface Props {
  storage: RootStorageMeta[];
  title: string;
}

export function StorageList({ storage, title }: Props) {
  const styles = useStyles2(getStyles);

  return (
    <>
      <h4 className={styles.secondaryTextColor}>{title}</h4>
      {storage.map((s) => {
        return (
          <Card key={uniqueId()}>
            <Card.Heading className={styles.heading}>
              {s.config.name}
              <Badge text={s.ready ? 'Ready' : 'Not ready'} color={s.ready ? 'green' : 'red'} />
            </Card.Heading>
            <Card.Meta>{s.config.prefix}</Card.Meta>
            <Card.Description>{getDescription(s)}</Card.Description>
            <Card.Figure>
              <Icon name={getIconName(s.config.type)} size="xxxl" className={styles.secondaryTextColor} />
            </Card.Figure>
          </Card>
        );
      })}
    </>
  );
}
function getStyles(theme: GrafanaTheme2) {
  return {
    secondaryTextColor: css`
      color: ${theme.colors.text.secondary};
    `,
    heading: css`
      justify-content: flex-start;
      gap: 0.5rem;
    `,
  };
}

export function getIconName(type: string): IconName {
  switch (type) {
    case 'git':
      return 'code-branch';
    case 'disk':
      return 'folder-open';
    case 'sql':
      return 'database';
    default:
      return 'folder-open';
  }
}
export function getDescription(storage: RootStorageMeta) {
  if (storage.config.disk) {
    return `${storage.config.disk.path}`;
  }
  if (storage.config.git) {
    return `${storage.config.git.remote}`;
  }
  if (storage.config.sql) {
    return `${storage.config.sql}`;
  }
  return '';
}
