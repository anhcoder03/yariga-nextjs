import { LayoutMain } from "@/components/layout";
import { addNewProperty, getProperties } from "@/store/property.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const ProperyCreatePage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addNewProperty,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      await queryClient.prefetchQuery({
        queryKey: ["properties"],
        queryFn: getProperties,
      });
    },
  });
  const handleCreateNewProperty = () => {
    mutation.mutate();
  };
  return (
    <LayoutMain>
      <button onClick={handleCreateNewProperty}>Add new property</button>
    </LayoutMain>
  );
};

export default ProperyCreatePage;
