<Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactsForm/>
        </Container>
        <Container>
        <Title>Contacts</Title>
          {isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          <Filter />
          <ContactList />
      </Container>
      </Section>