variable "project_id" {
  description = "project id"
}

variable "region" {
  description = "region"
}

variable "machine_type" {
  default     = ""
  description = "machine type"
}

variable "gke_num_nodes" {
  default     = 1
  description = "number of gke nodes"
}